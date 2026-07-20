# Database Schema

## Core Entities

- Organization
- User
- Creator
- Contact
- Contact Identity
- Creator Hub
- Campaign
- Trigger
- Action
- Campaign Execution
- Resource
- Product
- Recommendation
- Analytics

## Contacts

SimpleDee models people as **Contacts**, not Followers.

A Contact represents a unique individual regardless of how they interact with a creator.

Contacts may have one or more associated identities (social accounts, email addresses, phone numbers, etc.) that are linked over time as sufficient evidence becomes available.

A Contact should never be automatically merged based solely on matching names or usernames.

Identity resolution should only occur through high-confidence signals such as:

- Verified email address
- Phone number
- OAuth login
- Explicit user confirmation
- Future identity resolution workflows

This architecture allows a single Contact to interact across multiple communication channels while preserving data integrity.

## Contact Philosophy

SimpleDee prioritizes **data integrity over aggressive identity resolution**.

Duplicate Contacts are acceptable.

Incorrect merges are not.

New platform identities should initially create their own Contact unless high-confidence evidence exists to associate them with an existing Contact.

Identity resolution is handled by application logic rather than the database schema.

## organizations

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| name | Text | Organization name |
| plan | Text | Free, Pro, Business |
| status | Text | Active, Cancelled |
| stripe_customer_id | Text | Stripe Customer ID |
| created_at | Timestamp | |
| updated_at | Timestamp | |
| deleted_at | Timestamp | Soft delete |



## users

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| organization_id | UUID | FK → organizations.id |
| email | Text | Unique |
| first_name | Text | |
| last_name | Text | |
| role | Text | Owner, Admin, Member |
| status | Text | Active, Invited, Disabled |
| created_at | Timestamp | |
| updated_at | Timestamp | |
| deleted_at | Timestamp | Soft delete |

## creators

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| organization_id | UUID | FK → organizations.id |
| display_name | Text | Public name |
| slug | Text | Unique URL slug |
| bio | Text | |
| profile_image | Text | URL |
| website | Text | Optional |
| custom_domain | Text | Optional |
| logo_image | Text | URL |
| status | Text | Active, Archived |
| timezone | Text | IANA timezone |
| created_at | Timestamp | |
| updated_at | Timestamp | |
| deleted_at | Timestamp | Soft delete |

## contacts

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| organization_id | UUID | FK → organizations.id |
| display_name | Text | Best known name |
| primary_email | Text | Optional |
| primary_phone | Text | Optional |
| status | Text | Active, Archived, Blocked |
| created_at | Timestamp | |
| updated_at | Timestamp | |
| deleted_at | Timestamp | Soft delete |

## contact_identities

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| contact_id | UUID | FK → contacts.id |
| platform | Text | Instagram, TikTok, Facebook, Email, SMS, etc. |
| platform_user_id | Text | Unique identifier from the platform |
| username | Text | Platform username |
| display_name | Text | Platform display name |
| verified | Boolean | High-confidence identity |
| first_seen_at | Timestamp | |
| last_seen_at | Timestamp | |
| created_at | Timestamp | |
| updated_at | Timestamp | |

## contact_tags

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| contact_id | UUID | FK → contacts.id |
| tag | Text | User-defined tag |
| created_at | Timestamp | |

## campaigns

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| creator_id | UUID | FK → creators.id |
| name | Text | Internal campaign name |
| description | Text | Optional |
| status | Text | Draft, Active, Paused, Scheduled, Archived |
| primary_creator_hub_id | UUID | FK → creator_hubs.id (optional) |
| starts_at | Timestamp | Optional |
| ends_at | Timestamp | Optional |
| created_at | Timestamp | |
| updated_at | Timestamp | |
| deleted_at | Timestamp | Soft delete |

## triggers

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| campaign_id | UUID | FK → campaigns.id |
| platform | Text | Instagram, TikTok, Facebook, etc. |
| content_type | Text | Reel, Post, Story, Video |
| platform_content_id | Text | ID from the platform |
| event_type | Text | Comment, Like, DM (future) |
| trigger_type | Text | Keywords, AI, All Comments |
| trigger_value | Text | Keywords or AI prompt |
| priority | Integer | Evaluation order |
| status | Text | Active, Paused |
| created_at | Timestamp | |
| updated_at | Timestamp | |
| deleted_at | Timestamp | Soft delete |

## matching_method

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| trigger_id | UUID | FK → triggers.id |
| keyword | Text | Keyword or phrase |
| match_type | Text | Exact, Contains |
| created_at | Timestamp | |
| updated_at | Timestamp | |
| deleted_at | Timestamp | Soft delete |

## deliveries

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| campaign_id | UUID | FK → campaigns.id |
| type | Text | DM, Public Reply, Both |
| message | Text | Optional template |
| include_creator_hub | Boolean | |
| status | Text | Active, Paused |
| created_at | Timestamp | |
| updated_at | Timestamp | |
| deleted_at | Timestamp | Soft delete |

## campaign_executions

Tracks each Contact's progress through a Campaign independently.

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| campaign_id | UUID | FK → campaigns.id |
| contact_id | UUID | FK → contacts.id |
| status | Text | Running, Waiting, Completed, Cancelled, Failed |
| current_step | Integer | Current workflow step |
| next_run_at | Timestamp | Next scheduled execution |
| started_at | Timestamp | |
| completed_at | Timestamp | Optional |
| exit_reason | Text | Optional |
| created_at | Timestamp | |
| updated_at | Timestamp | |

## resources

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| creator_id | UUID | FK → creators.id |
| name | Text | Internal name |
| resource_type | Text | Recipe, PDF, Text, Video, Link, File, Image |
| title | Text | Public title |
| description | Text | Optional |
| content_body | Text | Resource content |
| content_url | Text | File or external URL |
| thumbnail | Text | URL |
| status | Text | Draft, Active, Archived |
| created_at | Timestamp | |
| updated_at | Timestamp | |
| deleted_at | Timestamp | Soft delete |

## delivery_resources

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| delivery_id | UUID | FK → deliveries.id |
| resource_id | UUID | FK → resources.id |
| display_order | Integer | Order shown |

## products

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| creator_id | UUID | FK → creators.id |
| name | Text | Internal name |
| title | Text | Public title |
| description | Text | Optional |
| price | Decimal | |
| currency | Text | USD, etc. |
| stripe_product_id | Text | |
| stripe_price_id | Text | |
| thumbnail | Text | URL |
| status | Text | Draft, Active, Archived |
| created_at | Timestamp | |
| updated_at | Timestamp | |
| deleted_at | Timestamp | Soft delete |

## product_resources

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| product_id | UUID | FK → products.id |
| resource_id | UUID | FK → resources.id |
| display_order | Integer | |

## recommendations

Stores information about products, services, websites, or other links that a creator wants to recommend.

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| creator_id | UUID | FK → creators.id |
| name | Text | Internal name |
| title | Text | Public title |
| description | Text | Optional |
| destination_url | Text | URL to open |
| image_url | Text | Optional thumbnail |
| button_text | Text | Example: "Shop Now" |
| category | Text | Optional organization |
| status | Text | Draft, Active, Archived |
| created_at | Timestamp | |
| updated_at | Timestamp | |
| deleted_at | Timestamp | Soft delete |

## delivery_recommendations

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| delivery_id | UUID | FK → deliveries.id |
| recommendation_id | UUID | FK → recommendations.id |
| display_order | Integer | Display order |

## Architecture Decisions

- Billing belongs to Organization.
- User and Creator are separate entities.
- Campaigns contain multiple Triggers.
- Billing belongs to Organization.
- Contacts belong to Organization.
- User and Creator are separate entities.
- Campaigns contain multiple Triggers.
- Campaigns contain multiple Deliveries (Actions).
- Campaigns create Campaign Executions at runtime.
- Resources are reusable.
- Products are reusable.
- Recommendations are reusable.
- Creator Hub is modular.
- Duplicate Contacts are acceptable.
- Incorrect identity merges are not.
- Analytics are tracked per Campaign.
- Campaigns contain multiple Resources.
- Campaigns contain multiple Products.
- Campaigns contain multiple Recommendations.
- Resources are reusable.
- Products are reusable.
- Recommendations are reusable.
- Creator Hub is modular.
- Analytics are tracked per Campaign.

## creator_hubs

Represents a creator's public hub where followers can discover resources, products, recommendations, and other content.

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| creator_id | UUID | FK → creators.id |
| name | Text | Internal name |
| title | Text | Public heading |
| description | Text | Optional |
| slug | Text | Public URL slug |
| theme_id | Text | Theme identifier |
| status | Text | Draft, Active, Archived |
| created_at | Timestamp | |
| updated_at | Timestamp | |
| deleted_at | Timestamp | Soft delete |

## creator_hub_resources

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| creator_hub_id | UUID | FK → creator_hubs.id |
| resource_id | UUID | FK → resources.id |
| display_order | Integer | |

## creator_hub_products

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| creator_hub_id | UUID | FK → creator_hubs.id |
| product_id | UUID | FK → products.id |
| display_order | Integer | |

## creator_hub_recommendations

| Column | Type | Notes |
|---------|------|-------|
| id | UUID | Primary Key |
| creator_hub_id | UUID | FK → creator_hubs.id |
| recommendation_id | UUID | FK → recommendations.id |
| display_order | Integer | |



## Database Design Principles

- Use UUID primary keys.
- Prefer soft deletes over permanent deletes.
- Store timestamps in UTC.
- Reuse entities whenever possible.
- Design for multi-platform support.
- Prioritize data integrity over automatic identity resolution.
- Separate configuration data from runtime data whenever possible.