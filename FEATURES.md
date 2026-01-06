# Feature Improvements & Roadmap

This document outlines potential enhancements to expand functionality and improve user experience.

## Current Feature Set

### Implemented
- User authentication with JWT
- View available restaurants
- Vote once per day per restaurant
- Add new restaurants to voting pool
- View daily winner
- Voting cutoff time enforcement (11:45 AM)
- Weekly winner prevention (same place cannot win twice in week)
- Vote history tracking

## Recommended Improvements

### High Priority - Core Experience

#### 1. Vote History & Analytics
**Current State**: Vote history exists internally but not exposed to users

**Improvement**: Display voting trends and statistics
- Weekly/monthly voting summaries
- Win frequency for each restaurant
- User voting patterns
- Historical winner list

**Implementation**:
- Add `GET /places/:placeId/history` endpoint
- Add `GET /analytics/weekly` and `/analytics/monthly` endpoints
- Create analytics UI component
- Estimate: 8-16 hours

---

#### 2. Multiple Vote Options
**Current State**: Users can only vote for one place per day

**Improvement**: Allow users to vote on multiple restaurants with preference ranking
- First choice, second choice, third choice
- Winner calculation uses weighted scoring
- Better representation of user preferences

**Implementation**:
- Modify vote schema to include `preference` field
- Update voting logic for preference-based winner calculation
- Update UI to allow multiple selections
- Estimate: 12-20 hours

---

#### 3. Restaurant Categories & Filtering
**Current State**: Flat list of restaurants

**Improvement**: Organize restaurants by cuisine type
- Cuisine categories (Italian, Japanese, Burger, etc.)
- Filter restaurants by category
- Search functionality

**Implementation**:
- Add `category` field to Place model
- Create category management endpoints
- Update UI with filters and search
- Estimate: 8-12 hours

---

#### 4. User Profiles & Preferences
**Current State**: Basic user data, no preferences

**Improvement**: User settings and dietary preferences
- Dietary restrictions (vegetarian, vegan, gluten-free, etc.)
- Cuisine preferences
- Notification preferences
- Profile customization

**Implementation**:
- Extend User model with preferences
- Add profile page UI
- Filter restaurants based on user preferences
- Estimate: 10-16 hours

---

### Medium Priority - Enhancement Features

#### 5. Email/Notification System
**Current State**: No notifications

**Improvement**: Notify users of voting reminders and results
- Daily reminder to vote before cutoff
- Notification of winning restaurant
- Browser push notifications

**Implementation**:
- Add `nodemailer` for email or Firebase for push notifications
- Schedule notifications with `node-schedule` (already in dependencies)
- Add notification preferences UI
- Estimate: 16-24 hours

---

#### 6. Mobile Responsive Design
**Current State**: Works on mobile but not optimized

**Improvement**: Fully responsive and touch-optimized interface
- Mobile-first design
- Touch-friendly buttons and controls
- Optimized voting flow for small screens

**Implementation**:
- Refactor CSS for responsive layout
- Test on various mobile devices
- Optimize touch interactions
- Estimate: 12-20 hours

---

#### 7. Restaurant Images & Information
**Current State**: Plain text restaurant names only

**Improvement**: Rich restaurant data
- Restaurant photos/logos
- Address and directions (Google Maps integration)
- Opening hours and contact info
- User ratings/reviews

**Implementation**:
- Extend Place schema with additional fields
- Add image upload functionality
- Integrate Google Maps API
- Estimate: 20-32 hours

---

#### 8. Team Management
**Current State**: All users can see and vote on same pool

**Improvement**: Support multiple teams/groups
- Create and manage teams
- Separate voting pools per team
- Team-specific restaurants
- Team member invitations

**Implementation**:
- Add Team model
- Modify Place and Vote schemas to include team reference
- Add team management endpoints
- Update UI for team selection
- Estimate: 24-40 hours

---

#### 9. Customizable Voting Rules
**Current State**: Fixed rules (11:45 AM cutoff, weekly repeat prevention)

**Improvement**: Admin panel to configure voting rules
- Adjustable voting cutoff time
- Enable/disable weekly repeat prevention
- Maximum votes per day per user
- Voting period configuration

**Implementation**:
- Add configuration schema
- Create admin endpoints for configuration
- Add admin UI panel
- Estimate: 12-20 hours

---

#### 10. Export & Reporting
**Current State**: No data export capability

**Improvement**: Generate reports and export data
- Export voting history to CSV
- Generate weekly/monthly reports
- PDF report generation

**Implementation**:
- Add endpoints for data export
- Use `csv-writer` for CSV generation
- Use `pdfkit` or `puppeteer` for PDF generation
- Estimate: 8-16 hours

---

### Low Priority - Additional Features

#### 11. Dark Mode
**Current State**: Light theme only

**Improvement**: Dark mode toggle
- User preference storage
- System dark mode detection
- Smooth theme switching

**Implementation**:
- Add theme CSS variables
- Add theme toggle UI
- Persist preference in localStorage
- Estimate: 4-8 hours

---

#### 12. Geolocation-Based Suggestions
**Current State**: No location awareness

**Improvement**: Suggest nearby restaurants
- Show restaurant proximity
- Integration with Google Places API
- Filter by distance

**Implementation**:
- Use geolocation API
- Integrate Google Places API
- Update UI with distance display
- Estimate: 16-24 hours

---

#### 13. Undo/Retract Vote
**Current State**: No way to change vote once cast

**Improvement**: Allow vote changes before cutoff time
- Retract vote option
- Change vote option
- Show time remaining before cutoff

**Implementation**:
- Add `DELETE /places/:placeId/votes` endpoint
- Modify `PUT /places` to allow vote changes
- Update UI with retract/change options
- Estimate: 4-8 hours

---

#### 14. Real-time Updates
**Current State**: Manual refresh required

**Improvement**: Live vote count updates
- WebSocket integration
- Real-time vote notifications
- Live winner updates

**Implementation**:
- Add Socket.io for WebSocket support
- Emit events on vote changes
- Update frontend to listen for events
- Estimate: 20-32 hours

---

#### 15. Admin Dashboard
**Current State**: No admin interface

**Improvement**: Admin panel for management
- User management
- Restaurant management
- Voting rule configuration
- Analytics and reporting
- Activity logs

**Implementation**:
- Create admin routes and controllers
- Build admin UI
- Implement audit logging
- Estimate: 32-48 hours

---

## Quick Wins (Can Do Now)

### 1. Improve Error Messages
- Add descriptive error responses
- Better validation feedback
- User-friendly error display

Estimate: 2-4 hours

### 2. Add Input Validation
- Validate restaurant names (min/max length)
- Validate user inputs on registration
- Server-side validation on all endpoints

Estimate: 4-8 hours

### 3. Improve UI/UX
- Better button styling and feedback
- Loading states
- Confirmation dialogs for important actions
- Empty state messages

Estimate: 6-10 hours

### 4. Add Help/Documentation
- In-app help text and tooltips
- User guide
- FAQ section

Estimate: 2-4 hours

### 5. Code Documentation
- Add JSDoc comments to functions
- Document API endpoints
- Improve code readability

Estimate: 4-8 hours

---

## Dependency Additions for Features

To implement recommended features, consider adding:

### Backend
```json
{
  "bcryptjs": "^2.4.3",
  "dotenv": "^16.0.3",
  "express-rate-limit": "^6.7.0",
  "helmet": "^7.0.0",
  "joi": "^17.9.2",
  "winston": "^3.8.2",
  "nodemailer": "^6.9.3",
  "pdfkit": "^0.13.0",
  "csv-writer": "^1.6.0",
  "socket.io": "^4.6.1",
  "googleapis": "^118.0.0"
}
```

### Frontend
```json
{
  "angular-loading-bar": "^0.9.0",
  "ng-toast": "^2.0.0",
  "angular-google-maps": "^2.4.1"
}
```

---

## Architecture Improvements

### Database Migration
Currently uses NeDB (file-based). For scalability consider:
- MongoDB (document-oriented, similar API)
- PostgreSQL (relational, more structured)
- Firebase (managed, real-time)

Migration effort: 40-80 hours depending on target

### Frontend Framework Migration
AngularJS is end-of-life. Consider:
- React (most popular, large ecosystem)
- Vue.js (easier learning curve)
- Angular (modern, official successor)

Migration effort: 80-160 hours depending on target

### API Versioning
Add versioning to prepare for future changes:
- Routes: `/api/v1/places` instead of `/places`
- Easier to support multiple API versions

Estimate: 4-8 hours

---

## Implementation Priority Matrix

| Feature | Complexity | Value | Priority |
|---------|------------|-------|----------|
| Vote History & Analytics | Medium | High | 1 |
| Input Validation | Low | High | 2 |
| Undo/Retract Vote | Low | Medium | 3 |
| Multiple Vote Options | High | High | 4 |
| Restaurant Categories | Medium | Medium | 5 |
| User Profiles & Preferences | Medium | Medium | 6 |
| Mobile Responsive Design | Medium | High | 7 |
| Email Notifications | Medium | Medium | 8 |
| Team Management | High | Medium | 9 |
| Real-time Updates | High | Medium | 10 |
| Dark Mode | Low | Low | 11 |
| Admin Dashboard | High | Medium | 12 |

---

## Recommended Next Steps

1. **Implement Quick Wins** (8-16 hours total)
   - Add input validation
   - Improve error messages
   - Add better UI feedback

2. **Add Analytics** (8-16 hours)
   - Vote history display
   - Weekly statistics
   - Top restaurants list

3. **Improve Accessibility** (8-12 hours)
   - Mobile responsiveness
   - Keyboard navigation
   - Screen reader support

4. **Plan Framework Migration** (ongoing)
   - Evaluate React/Vue options
   - Create migration plan
   - Phase out AngularJS gradually

5. **Plan Database Upgrade** (ongoing)
   - Evaluate MongoDB/PostgreSQL
   - Create migration strategy
   - Prepare for scaling

