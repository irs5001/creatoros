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

## Database Design Principles

- Use UUID primary keys.
- Prefer soft deletes over permanent deletes.
- Store timestamps in UTC.
- Reuse entities whenever possible.
- Design for multi-platform support.