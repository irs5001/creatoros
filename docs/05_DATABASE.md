# Database Schema

## Core Entities

- Organization
- User
- Creator
- Creator Hub
- Campaign
- Trigger
- Delivery
- Resource
- Product
- Recommendation
- Follower
- Comment
- Analytics

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
- Campaigns contain multiple Deliveries.
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