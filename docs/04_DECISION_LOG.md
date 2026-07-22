## 2026-07-18

### Multiple Creator Hubs

**Decision**
A Creator may own multiple Creator Hubs.

**Reason**
Although the MVP may only expose one public hub, supporting multiple hubs in the database allows future use cases such as seasonal hubs, branded hubs, campaign-specific hubs, and niche content without requiring a database redesign.

**Status**
Accepted

### Theme System

**Decision**
Creator Hubs reference a `theme_id` instead of storing a theme name directly.

**Reason**
Themes should become reusable platform objects. Referencing them by ID keeps the database normalized and allows themes to evolve independently from Creator Hubs.

**Status**
Accepted

---

## Decision: Rename Project to SimpleDee

**Date:** 2026-07-18

**Status:** ✅ Accepted


### Decision

Rename the project codename from **CreatorOS** to **SimpleDee**.

All future documentation, architecture, and development will use the SimpleDee name.

### Reasoning

The name "CreatorOS" implied the platform was exclusively for content creators.

While creators remain the initial target audience, the long-term vision is a platform that simplifies the management of an online business regardless of industry.

"SimpleDee" better represents the product philosophy:

- Simplicity over complexity
- Organized workflows
- Coordinated systems
- Easy-to-use automation
- Room to expand beyond creators

### Impact

- Update all documentation references.
- Future repositories and applications should use the SimpleDee name.
- Existing architecture, database design, roadmap, and MVP remain unchanged.
- This is a branding change only.

### Alternatives Considered

- CreatorOS
- Helm
- Avenor
- Cresvia
- Multiple Latin/German-inspired names

### Notes

The team intentionally selected a broader, more timeless brand before significant development began to avoid future rebranding costs.

---

---

## [Architecture] Contacts Instead of Followers

**Date:** 2026-07-20

**Status:** ✅ Accepted

### Decision

SimpleDee will model individuals as **Contacts** rather than **Followers**.

Each Contact represents a unique person and may have multiple associated identities across supported platforms.

### Reasoning

A single individual may interact with a creator through multiple channels over time, including:

- Instagram
- TikTok
- Facebook
- Email
- SMS
- Future communication platforms

Modeling people as Contacts provides a flexible foundation for CRM capabilities, purchase history, segmentation, personalization, and multi-channel automation.

### Identity Model

Platform-specific accounts will be stored separately in a `contact_identities` table.

A Contact may have one or more identities linked to it.

### Identity Resolution

SimpleDee will **not** automatically merge identities based solely on names or usernames.

Identity linking should only occur through high-confidence signals, including:

- Verified email address
- Phone number
- OAuth authentication
- Explicit user confirmation
- Future identity resolution workflows

### Impact

- Future communication channels can be added without modifying the Contacts table.
- Automation will operate against Contacts while utilizing the appropriate Identity for each platform.
- This architecture supports future CRM functionality without requiring major database redesign.

### Alternatives Considered

- Followers table
- Separate tables for followers, subscribers, customers, and members

### Notes

The user interface may continue to use creator-friendly terms such as **Followers**, **Audience**, or **Community**, while the backend consistently models individuals as Contacts.

---