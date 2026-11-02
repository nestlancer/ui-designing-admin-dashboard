# User & administrative OpenAPI operation inventory

Generated from the local OpenAPI snapshots, not live traffic. The users spec has 40 paths; admin has 56. This inventory enumerates every operation in users, plus user, impersonation, dashboard-users and audit operations in admin. Paths are service-local, not confirmed gateway URLs. Non-user admin operations are out of scope.

## users.openapi.json

### GET `/api/v1/users/health` — Health check
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Standard success envelope.

### GET `/api/v1/users/profile` — Get current user profile
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Standard success envelope.

### PATCH `/api/v1/users/profile` — Update profile
- Parameters: none documented.
- Body: application/json: #/components/schemas/UpdateProfileDto.
- Responses: `200` Profile updated successfully.

### POST `/api/v1/users/avatar` — Upload avatar
- Parameters: none documented.
- Body: multipart/form-data: {'type': 'object', 'properties': {'file': {'type': 'string', 'format': 'binary'}}}.
- Responses: `200` Avatar uploaded successfully, `201` .

### DELETE `/api/v1/users/avatar` — Remove avatar
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Avatar removed successfully.

### GET `/api/v1/users/preferences` — Get user preferences
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Standard success envelope.

### PATCH `/api/v1/users/preferences` — Update user preferences
- Parameters: none documented.
- Body: application/json: #/components/schemas/UpdatePreferencesDto.
- Responses: `200` Preferences updated successfully.

### PATCH `/api/v1/users/password` — Change password
- Parameters: none documented.
- Body: application/json: #/components/schemas/ChangePasswordDto.
- Responses: `200` Password changed successfully.

### POST `/api/v1/users/change-password` — Change password (POST)
- Parameters: none documented.
- Body: application/json: #/components/schemas/ChangePasswordDto.
- Responses: `200` Password changed successfully. Please login with your new password., `201` .

### POST `/api/v1/users/2fa/enable` — Initiate 2FA setup
- Parameters: none documented.
- Body: application/json: #/components/schemas/Enable2FADto.
- Responses: `200` 2FA setup initiated, `201` .

### POST `/api/v1/users/2fa/verify` — Verify and finalize 2FA
- Parameters: none documented.
- Body: application/json: #/components/schemas/Verify2FASetupDto.
- Responses: `200` 2FA enabled successfully, `201` .

### POST `/api/v1/users/2fa/disable` — Disable 2FA
- Parameters: none documented.
- Body: application/json: #/components/schemas/Disable2FADto.
- Responses: `200` 2FA disabled successfully, `201` .

### GET `/api/v1/users/2fa/status` — Get 2FA status
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Standard success envelope.

### GET `/api/v1/users/2fa/backup-codes` — Get 2FA backup codes
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Standard success envelope.

### POST `/api/v1/users/2fa/regenerate-codes` — Regenerate 2FA backup codes
- Parameters: none documented.
- Body: application/json: #/components/schemas/Enable2FADto.
- Responses: `200` Backup codes regenerated, `201` .

### GET `/api/v1/users/sessions` — List active sessions
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Standard success envelope.

### GET `/api/v1/users/sessions/{sessionId}` — Get session details
- Parameters: `sessionId` (path, required).
- Body: none documented.
- Responses: `200` Standard success envelope.

### DELETE `/api/v1/users/sessions/{sessionId}` — Terminate specific session
- Parameters: `sessionId` (path, required).
- Body: none documented.
- Responses: `200` Session terminated successfully.

### POST `/api/v1/users/sessions/terminate-others` — Terminate all other sessions
- Parameters: none documented.
- Body: none documented.
- Responses: `200` All other sessions terminated successfully, `201` .

### POST `/api/v1/users/delete-account` — Request account deletion
- Parameters: none documented.
- Body: application/json: #/components/schemas/DeleteAccountDto.
- Responses: `200` Account deletion scheduled. You have 30 days to cancel this request., `201` .

### POST `/api/v1/users/cancel-deletion` — Cancel deletion request
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Account deletion cancelled successfully., `201` .

### GET `/api/v1/users/activity` — Get user activity log
- Parameters: `page` (query, optional), `limit` (query, optional).
- Body: none documented.
- Responses: `200` Standard success envelope.

### GET `/api/v1/users/export` — Request data export
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Standard success envelope.

### GET `/api/v1/users/data-export` — Request data export (alias)
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Standard success envelope.

### GET `/api/v1/users/export/{id}` — Download data export
- Parameters: `id` (path, required).
- Body: none documented.
- Responses: `200` Standard success envelope.

### GET `/api/v1/admin/users` — List all users (ADMIN only)
- Parameters: `page` (query, optional), `limit` (query, optional), `status` (query, optional), `role` (query, optional).
- Body: none documented.
- Responses: `200` Standard success envelope.

### GET `/api/v1/admin/users/search` — Search users
- Parameters: `q` (query, required), `page` (query, optional), `limit` (query, optional).
- Body: none documented.
- Responses: `200` Standard success envelope.

### GET `/api/v1/admin/users/security-stats` — Security statistics (users path alias)
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Standard success envelope.

### POST `/api/v1/admin/users/bulk` — Bulk user operations
- Parameters: none documented.
- Body: application/json: #/components/schemas/AdminBulkOperationDto.
- Responses: `200` Bulk operation completed, `201` .

### DELETE `/api/v1/admin/users/sessions/{sessionId}` — Terminate specific user session
- Parameters: `sessionId` (path, required).
- Body: none documented.
- Responses: `200` User session terminated successfully.

### GET `/api/v1/admin/users/logs` — List admin user-management audit logs
- Parameters: `page` (query, optional), `limit` (query, optional).
- Body: none documented.
- Responses: `200` Standard success envelope.

### GET `/api/v1/admin/users/logs/security-stats` — Get security statistics (users path)
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Standard success envelope.

### GET `/api/v1/admin/users/{userId}` — Get user details
- Parameters: `userId` (path, required).
- Body: none documented.
- Responses: `200` Standard success envelope.

### PATCH `/api/v1/admin/users/{userId}` — Update user (Admin)
- Parameters: `userId` (path, required), `user-agent` (header, required).
- Body: application/json: #/components/schemas/AdminUpdateUserDto.
- Responses: `200` User updated successfully.

### DELETE `/api/v1/admin/users/{userId}` — Delete user account (soft delete)
- Parameters: `userId` (path, required).
- Body: none documented.
- Responses: `200` User deleted successfully.

### PATCH `/api/v1/admin/users/{userId}/role` — Change user role
- Parameters: `userId` (path, required), `user-agent` (header, required).
- Body: application/json: #/components/schemas/AdminChangeRoleDto.
- Responses: `200` User role updated successfully.

### PATCH `/api/v1/admin/users/{userId}/status` — Change user status
- Parameters: `userId` (path, required), `user-agent` (header, required).
- Body: application/json: #/components/schemas/AdminChangeStatusDto.
- Responses: `200` User status updated successfully.

### POST `/api/v1/admin/users/{userId}/force-password-reset` — Force password reset
- Parameters: `userId` (path, required), `user-agent` (header, required).
- Body: none documented.
- Responses: `200` Password reset forced. User will be required to change password on next login., `201` .

### POST `/api/v1/admin/users/{userId}/reset-password` — Manually reset password
- Parameters: `userId` (path, required), `user-agent` (header, required).
- Body: application/json: #/components/schemas/AdminResetPasswordDto.
- Responses: `200` Password reset successfully, `201` .

### GET `/api/v1/admin/users/{userId}/sessions` — Get user active sessions
- Parameters: `userId` (path, required).
- Body: none documented.
- Responses: `200` Standard success envelope.

### POST `/api/v1/admin/users/{userId}/terminate-all-sessions` — Terminate all user sessions
- Parameters: `userId` (path, required).
- Body: none documented.
- Responses: `200` All user sessions terminated, `201` .

### POST `/api/v1/admin/users/{userId}/export` — Trigger user data export (GDPR)
- Parameters: `userId` (path, required).
- Body: none documented.
- Responses: `200` Data export queued, `201` .

### GET `/api/v1/admin/users/{userId}/activity` — Get user activity log
- Parameters: `userId` (path, required), `page` (query, optional), `limit` (query, optional).
- Body: none documented.
- Responses: `200` Standard success envelope.

### POST `/api/v1/admin/users/{userId}/restore` — Restore user account
- Parameters: `userId` (path, required).
- Body: none documented.
- Responses: `200` User restored successfully, `201` .

### GET `/api/v1/admin/logs` — List authentication audit logs
- Parameters: `page` (query, optional), `limit` (query, optional).
- Body: none documented.
- Responses: `200` Standard success envelope.

### GET `/api/v1/admin/logs/security-stats` — Security metrics for audit dashboard
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Standard success envelope.

### Relevant schemas

#### ResponseMetadataDto
Required: timestamp, requestId, version.
- `timestamp`: {"type": "string"}
- `requestId`: {"type": "string"}
- `version`: {"type": "string"}
- `path`: {"type": "string"}

#### ApiSuccessEnvelopeDto
Required: status, data, metadata.
- `status`: {"type": "string", "enum": ["success"]}
- `data`: {"type": "object", "description": "Business payload returned by the controller handler"}
- `metadata`: {}

#### UpdateProfileDto
Required: none documented.
- `firstName`: {"type": "string", "minLength": 2, "maxLength": 50, "description": "User's first name"}
- `lastName`: {"type": "string", "minLength": 2, "maxLength": 50, "description": "User's last name"}
- `phone`: {"type": "string", "description": "User's phone number in E.164 format"}
- `headline`: {"type": "string", "maxLength": 160, "description": "Short professional tagline shown on the public profile"}
- `bio`: {"type": "string", "maxLength": 2000, "description": "Longer profile bio"}
- `skills`: {"description": "Skills or expertise tags", "type": "array", "items": {"type": "string", "maxLength": 50}}
- `timezone`: {"type": "string", "description": "User's preferred timezone"}
- `language`: {"type": "string", "maxLength": 2, "description": "User preferred language (ISO 639-1)"}
- `country`: {"type": "string", "maxLength": 2, "description": "User country (ISO 3166-1 alpha-2)"}

#### EmailNotificationsDto
Required: none documented.
- `projectUpdates`: {"type": "boolean", "description": "Enable/disable project update emails"}
- `paymentReminders`: {"type": "boolean", "description": "Enable/disable payment reminder emails"}
- `marketing`: {"type": "boolean", "description": "Enable/disable marketing emails"}
- `digest`: {"type": "string", "enum": ["daily", "weekly", "never"], "description": "Frequency of account activity digests"}

#### PushNotificationsDto
Required: none documented.
- `messages`: {"type": "boolean", "description": "Enable/disable message push notifications"}
- `projectUpdates`: {"type": "boolean", "description": "Enable/disable project update push notifications"}

#### NotificationsDto
Required: none documented.
- `email`: {"description": "Email notification settings"}
- `push`: {"description": "Push notification settings"}

#### PrivacyPreferencesDto
Required: none documented.
- `profileVisibility`: {"type": "string", "enum": ["public", "private", "connections"], "description": "Determines who can view the user profile"}
- `showEmail`: {"type": "boolean", "description": "Whether to expose email on public profile"}
- `showPhone`: {"type": "boolean", "description": "Whether to expose phone number on public profile"}

#### UpdatePreferencesDto
Required: none documented.
- `notifications`: {"description": "Notification preference overrides"}
- `privacy`: {"description": "Privacy and visibility overrides"}

#### ChangePasswordDto
Required: currentPassword, newPassword, confirmPassword.
- `currentPassword`: {"type": "string", "description": "The current password for verification"}
- `newPassword`: {"type": "string", "minLength": 8, "maxLength": 64, "description": "New password meeting complexity requirements", "format": "password"}
- `confirmPassword`: {"type": "string", "description": "Confirmation of the new password"}

#### Enable2FADto
Required: password.
- `password`: {"type": "string", "minLength": 1, "description": "User password for identity verification before 2FA activation", "format": "password"}

#### Verify2FASetupDto
Required: code.
- `code`: {"type": "string", "minLength": 6, "maxLength": 6, "description": "The 6-digit verification code generated by the authenticator app"}

#### Disable2FADto
Required: password, code.
- `password`: {"type": "string", "minLength": 1, "description": "User password for identity verification", "format": "password"}
- `code`: {"type": "string", "minLength": 6, "maxLength": 6, "description": "Current 6-digit TOTP code for final verification"}

#### DeleteAccountDto
Required: reason.
- `password`: {"type": "string", "description": "The user password for verification (required for non-OAuth users)", "format": "password"}
- `reason`: {"type": "string", "maxLength": 50, "description": "Primary reason for account deletion"}
- `feedback`: {"type": "string", "maxLength": 500, "description": "Detailed qualitative feedback on the platform experience"}

#### AdminBulkOperationDto
Required: userIds, action.
- `userIds`: {"description": "Array of user identification strings (UUIDs)", "type": "array", "items": {"type": "string"}}
- `action`: {"enum": ["suspend", "activate", "delete", "resetPassword"], "type": "string", "description": "The specific administrative action to execute"}
- `reason`: {"type": "string", "description": "Compulsory justification or reasoning for the bulk action (Audit log requirement)", "maxLength": 500}

#### AdminUpdateUserDto
Required: none documented.
- `firstName`: {"type": "string", "description": "User's first name override"}
- `lastName`: {"type": "string", "description": "User's last name override"}
- `email`: {"type": "string", "description": "Primary active email address of the user"}
- `status`: {"enum": ["ACTIVE", "SUSPENDED", "DELETED", "PENDING_DELETION"], "type": "string", "description": "Account lifecycle status"}

#### AdminChangeRoleDto
Required: role.
- `role`: {"enum": ["USER", "ADMIN"], "type": "string", "description": "The target system role to assign to the user"}

#### AdminChangeStatusDto
Required: status.
- `status`: {"enum": ["ACTIVE", "SUSPENDED", "DELETED", "PENDING_DELETION"], "type": "string"}

#### AdminResetPasswordDto
Required: newPassword.
- `newPassword`: {"type": "string", "minLength": 8, "description": "New password set by administrator (min 8 characters). Never returned in the API response."}

## admin.openapi.json

### GET `/api/audit` — List audit logs
- Parameters: `page` (query, optional), `limit` (query, optional), `pageSize` (query, optional), `sort` (query, optional), `userId` (query, optional), `resourceType` (query, optional), `action` (query, optional), `from` (query, optional), `to` (query, optional).
- Body: none documented.
- Responses: `200` Logs retrieved.

### GET `/api/audit/logs` — List audit logs (alias)
- Parameters: `page` (query, optional), `limit` (query, optional), `pageSize` (query, optional), `sort` (query, optional), `userId` (query, optional), `resourceType` (query, optional), `action` (query, optional), `from` (query, optional), `to` (query, optional).
- Body: none documented.
- Responses: `200` Logs retrieved.

### GET `/api/audit/stats` — Audit statistics
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Statistics retrieved.

### GET `/api/audit/user/{userId}` — User audit trail
- Parameters: `userId` (path, required).
- Body: none documented.
- Responses: `200` User trail retrieved.

### GET `/api/audit/resource/{type}/{id}` — Resource audit trail
- Parameters: `type` (path, required), `id` (path, required).
- Body: none documented.
- Responses: `200` Resource trail retrieved.

### GET `/api/audit/{id}` — Get audit entry
- Parameters: `id` (path, required).
- Body: none documented.
- Responses: `200` Audit entry retrieved.

### POST `/api/audit/export` — Export audit logs
- Parameters: none documented.
- Body: application/json: #/components/schemas/ExportAuditDto.
- Responses: `200` Export started, `201` .

### GET `/api/dashboard/users` — Get user metrics
- Parameters: `period` (query, optional enum=['TODAY', 'WEEK', 'MONTH', 'QUARTER', 'YEAR']).
- Body: none documented.
- Responses: `200` User metrics retrieved successfully.

### GET `/api/dashboard/analytics/users` — Get user analytics (alias of /dashboard/users)
- Parameters: `period` (query, optional enum=['TODAY', 'WEEK', 'MONTH', 'QUARTER', 'YEAR']).
- Body: none documented.
- Responses: `200` User analytics retrieved successfully.

### POST `/api/users/{userId}/impersonate` — Start impersonation session
- Parameters: `userId` (path, required).
- Body: application/json: #/components/schemas/ImpersonateUserDto.
- Responses: `200` Impersonation session started, `201` .

### POST `/api/users/impersonate/end` — End impersonation (body sessionId)
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Impersonation ended, `201` .

### POST `/api/users/impersonate/end/{sessionId}` — End impersonation session
- Parameters: `sessionId` (path, required).
- Body: none documented.
- Responses: `200` Impersonation ended, `201` .

### GET `/api/users/impersonate/sessions` — List impersonation sessions
- Parameters: none documented.
- Body: none documented.
- Responses: `200` Sessions retrieved.

### GET `/api/documents/users/{userId}` — List generated documents issued to a user (admin)
- Parameters: `userId` (path, required), `page` (query, optional), `limit` (query, optional), `latestOnly` (query, optional).
- Body: none documented.
- Responses: `200` Standard success envelope.

### Relevant schemas

#### ExportAuditDto
Required: format.
- `format`: {"enum": ["CSV", "JSON"], "type": "string", "description": "The target file format for the exported data"}
- `userId`: {"type": "string", "description": "Filter logs by actor user UUID"}
- `resourceType`: {"type": "string", "description": "Filter logs by resource category"}
- `action`: {"type": "string", "description": "Filter logs by specific system action"}
- `from`: {"type": "string", "description": "Reporting range start date"}
- `to`: {"type": "string", "description": "Reporting range end date"}

#### ImpersonateUserDto
Required: reason.
- `reason`: {"type": "string", "maxLength": 500, "description": "Justification for the impersonation session for auditing purposes"}
- `ticketId`: {"type": "string", "description": "Optional support ticket ID associated with this request"}
- `durationMinutes`: {"type": "number", "minimum": 1, "maximum": 240, "description": "How long the impersonation token stays valid, in minutes. Capped at the platform maximum."}

