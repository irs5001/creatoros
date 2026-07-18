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