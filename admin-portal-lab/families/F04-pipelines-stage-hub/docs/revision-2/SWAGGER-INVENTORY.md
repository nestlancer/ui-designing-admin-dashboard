# Repository Swagger contract inventory · revision 2

Downloaded specs 15 October 2026. Static contracts, not proof of running behavior. All 17 JSON specs parsed; operations, auth, parameters, DTO properties and response structures inspected.

## projects.openapi

None

### GET /api/v1/projects/health
Service health check
Confirm that the projects microservice is currently reachable and functioning.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/projects/stats
Get user project statistics
Fetch high-level statistical data regarding projects associated with the account.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/projects
List my projects
Lists all projects associated with the current user.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/projects/by-quote/{quoteId}
Get project by quote ID
Looks up a project created from an accepted quote (for post-accept polling).
Parameters: [{"name": "quoteId", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/projects/{id}
Get project details
Retrieves detailed information for a specific project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/projects/{id}/timeline
Get project timeline
Retrieves the historical timeline of events for a specific project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/projects/{id}/deliverables
Get project deliverables
Retrieves all deliverables associated with a specific project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/projects/{id}/payments
Get project payments
Retrieves all payment records related to a specific project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/projects/{id}/approve
Approve project
Approves a project and optionally provides feedback/testimonial.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ApproveProjectDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Project approved successfully. Thank you for your feedback!", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/projects/{id}/sign-contract
Sign project contract before deposit

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/projects/{id}/request-revision
Request project revision
Requests revisions for an active project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RequestProjectRevisionDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Revision request submitted successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/projects/{id}/progress
Get project progress tracking
Retrieves high-level progress tracking for a specific project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/projects/{id}/milestones
Get project milestones
Retrieves all milestones defined for a specific project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/projects/{id}/messages
Get project messages
Retrieves a paginated list of project-related internal messages.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}, {"name": "page", "required": false, "in": "query", "schema": {"example": "1", "type": "string"}}, {"name": "limit", "required": false, "in": "query", "schema": {"example": "20", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/projects/{id}/messages
Send message to project
Sends a new message within the specific project context.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/SendMessageDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Message sent successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/projects/{id}/feedback
Submit project feedback
Submits qualitative feedback for a specific project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/SubmitFeedbackDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Feedback submitted successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/projects/{id}/feedback
Get project feedback
Retrieves all submitted feedback for a specific project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/projects
List all projects (Admin)
Access the global repository of project records for oversight and audit.
Parameters: [{"name": "page", "required": false, "in": "query", "description": "Page number", "schema": {"example": "1", "type": "string"}}, {"name": "limit", "required": false, "in": "query", "description": "Results per page", "schema": {"example": "20", "type": "string"}}, {"name": "search", "required": false, "in": "query", "description": "Search by title or client", "schema": {"type": "string"}}, {"name": "status", "required": false, "in": "query", "description": "Filter by status (camelCase or enum)", "schema": {"type": "string"}}, {"name": "clientId", "required": false, "in": "query", "description": "Filter by client user ID", "schema": {"type": "string"}}, {"name": "userId", "required": false, "in": "query", "description": "Alias for clientId \u2014 filter by client user ID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/projects
Create project (Admin)
Manually creates a new project record.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateProjectAdminDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Project created successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/projects/stats
Get global project statistics
Fetch high-level performance data and status distribution for all projects.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/projects/{id}/status
Override project status
Perform an administrative intervention to change a project's current state.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateProjectStatusAdminDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Project status updated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/projects/{id}/status-history
List project status change history

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/projects/{id}
Update project details (Admin)
Updates core details of an existing project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateProjectAdminDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Project updated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/projects/{id}
Get project administrative details
Retrieves full administrative details for a specific project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/projects/{id}
Delete project
Permanent removal of a project record.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "204": {"description": "Project deleted"}}

### GET /api/v1/admin/projects/{id}/duplicate-preview
Preview project as duplicate template
Returns a sanitized template snapshot for the duplicate-as-template wizard.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Source project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/projects/from-template
Create draft quote from project template
Creates Request + Quote (DRAFT) from an edited project template.
Project is created only after the client accepts the quote.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/DuplicateFromTemplateDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Draft quote created from template", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/projects/{id}/team
Manage project team
Adds a new team member to a project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ManageProjectTeamAdminDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Team member added", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### DELETE /api/v1/admin/projects/{id}/team/{memberId}
Remove team member
Removes a team member from a project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}, {"name": "memberId", "required": true, "in": "path", "description": "Team member UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Team member removed", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/projects/{id}/analytics
Get project analytics
Retrieves in-depth performance analytics for a specific project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/projects/{id}/milestones
Batch create milestones
Group creation of milestones for a project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateMilestonesAdminDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Milestones created", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/projects/{id}/extend
Extend project deadline
Extends the formal deadline of a project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ExtendProjectAdminDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Deadline extended", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/projects/{id}/archive
Archive project
Moves a project to the archives.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Project archived", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/projects/{id}/unarchive
Unarchive project
Restores a previously archived project.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Project unarchived", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/projects/{id}/duplicate
Duplicate project (deprecated — use from-template wizard)

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "410": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/projects/{id}/portfolio-link
Get linked portfolio item status for a project

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/projects/{id}/portfolio-preview
Preview portfolio draft snapshot from a completed project

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/projects/{id}/create-portfolio-draft
Create portfolio draft from a completed project

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreatePortfolioDraftFromProjectDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### POST /api/v1/admin/projects/{id}/export
Export project data (async via outbox)
Enqueues an async project data export. A worker picks up the outbox event and
uploads the export file, then notifies the admin.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Export job queued", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/projects/{id}/export/download
Download latest project export (fresh signed URL)
Returns a fresh signed download URL for the latest project export zip.
Presigned URLs expire (~1h); notifications link here instead of embedding S3 URLs.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/public
List public projects
Lists publicly available portfolio projects for discovery.
Query: page, limit (default 20).
Parameters: [{"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/public/{id}
Get public project details
Retrieves detailed information for a specific public project (portfolio item).
Id can be UUID or slug.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID or slug", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/internal/projects/provision-from-quote
Provision project from accepted quote (inter-service)

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/QuoteAcceptedEventDto"}}}}
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "FeedbackDto": {
      "type": "object",
      "properties": {
        "quality": {
          "type": "number",
          "minimum": 1,
          "maximum": 5,
          "description": "Rating for work quality (1-5)",
          "example": 5
        },
        "communication": {
          "type": "number",
          "minimum": 1,
          "maximum": 5,
          "description": "Rating for communication level (1-5)",
          "example": 4
        },
        "timeliness": {
          "type": "number",
          "minimum": 1,
          "maximum": 5,
          "description": "Rating for meeting deadlines (1-5)",
          "example": 5
        },
        "professionalism": {
          "type": "number",
          "minimum": 1,
          "maximum": 5,
          "description": "Rating for professional conduct (1-5)",
          "example": 5
        },
        "overallSatisfaction": {
          "type": "number",
          "minimum": 1,
          "maximum": 5,
          "description": "Overall satisfaction rating (1-5)",
          "example": 5
        }
      },
      "required": [
        "quality",
        "communication",
        "timeliness",
        "professionalism",
        "overallSatisfaction"
      ]
    },
    "TestimonialDto": {
      "type": "object",
      "properties": {
        "text": {
          "type": "string",
          "maxLength": 2000,
          "description": "The text of the testimonial",
          "example": "Great work! Highly recommended."
        },
        "allowPublicUse": {
          "type": "boolean",
          "description": "Whether this testimonial can be displayed publicly",
          "default": false
        }
      },
      "required": [
        "text"
      ]
    },
    "ApproveProjectDto": {
      "type": "object",
      "properties": {
        "rating": {
          "type": "number",
          "minimum": 1,
          "maximum": 5,
          "description": "Overall project star rating",
          "example": 5
        },
        "feedback": {
          "description": "Breakdown of feedback for various categories",
          "allOf": [
            {
              "$ref": "#/components/schemas/FeedbackDto"
            }
          ]
        },
        "testimonial": {
          "description": "Optional testimonial for public use",
          "allOf": [
            {
              "$ref": "#/components/schemas/TestimonialDto"
            }
          ]
        },
        "comments": {
          "type": "string",
          "maxLength": 2000,
          "description": "Internal or additional qualitative comments",
          "example": "Everything was smooth."
        }
      },
      "required": [
        "rating",
        "feedback"
      ]
    },
    "RequestProjectRevisionDto": {
      "type": "object",
      "properties": {
        "area": {
          "type": "string",
          "description": "The functional or design area needing revision",
          "example": "User Authentication"
        },
        "priority": {
          "type": "string",
          "enum": [
            "low",
            "medium",
            "high",
            "critical"
          ],
          "description": "Urgency of the revision request",
          "example": "medium"
        },
        "description": {
          "type": "string",
          "maxLength": 2000,
          "description": "High-level summary of why the revision is needed",
          "example": "Social login is failing on mobile devices."
        },
        "details": {
          "description": "Detailed list of specific changes or fixes required",
          "example": [
            "Fix Google Login redirect",
            "Update callback URL in console"
          ],
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "attachments": {
          "description": "Array of media/file UUIDs related to the revision request (e.g., screenshots)",
          "example": [
            "550e8400-e29b-41d4-a716-446655440000"
          ],
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "dueDate": {
          "type": "string",
          "description": "Desired completion date for the requested revisions",
          "example": "2024-12-31T23:59:59Z",
          "format": "date-time"
        }
      },
      "required": [
        "area",
        "priority",
        "description",
        "details"
      ]
    },
    "SendMessageDto": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "maxLength": 2000,
          "description": "The textual content of the message",
          "example": "Can you please update the logo color?"
        }
      },
      "required": [
        "content"
      ]
    },
    "SubmitFeedbackDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "maxLength": 200,
          "description": "Short title for the feedback entry",
          "example": "Feedback from client about overall experience"
        },
        "feedback": {
          "type": "string",
          "maxLength": 2000,
          "description": "Detailed feedback text from the client",
          "example": "Overall experience was positive."
        }
      },
      "required": [
        "title",
        "feedback"
      ]
    },
    "UpdateProjectStatusAdminDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "description": "New status for the project. Operator aliases: PAUSED\u2192ON_HOLD, ACTIVE\u2192IN_PROGRESS.",
          "example": "ON_HOLD",
          "enum": [
            "IN_PROGRESS",
            "ON_HOLD",
            "PAUSED",
            "ACTIVE",
            "REVIEW",
            "COMPLETED",
            "CANCELLED",
            "PAYMENT_OVERDUE",
            "SUSPENDED",
            "DISPUTED",
            "REVISION_REQUESTED"
          ]
        },
        "reason": {
          "type": "string",
          "maxLength": 1000,
          "description": "Internal administrative reason for the status change",
          "example": "Payment dispute initiated by client."
        },
        "notifyClient": {
          "type": "boolean",
          "description": "Whether to send a notification to the client about this status change",
          "default": true
        }
      },
      "required": [
        "status",
        "reason"
      ]
    },
    "UpdateProjectAdminDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "description": "The title of the project",
          "example": "Refactored Website Backend"
        },
        "description": {
          "type": "string",
          "description": "The detailed scope of the project",
          "example": "Refactoring the entire backend to use NestJS."
        }
      }
    },
    "CreateProjectAdminDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "maxLength": 200,
          "description": "Human-readable project title",
          "example": "Website redesign for ACME Inc."
        },
        "quoteId": {
          "type": "string",
          "description": "Identifier of the accepted quote backing this project",
          "example": "quote-uuid-here"
        },
        "clientId": {
          "type": "string",
          "description": "Client user id who owns this project",
          "example": "client-user-id-uuid"
        },
        "description": {
          "type": "string",
          "maxLength": 2000,
          "description": "Optional longer description of the project"
        },
        "targetEndDate": {
          "type": "string",
          "description": "Optional target completion date (ISO 8601 string)",
          "example": "2025-12-31"
        }
      },
      "required": [
        "title",
        "quoteId",
        "clientId"
      ]
    },
    "TemplateRequestDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "maxLength": 200,
          "example": "E-commerce MVP rebuild"
        },
        "description": {
          "type": "string",
          "maxLength": 5000,
          "example": "Rebuild storefront with new checkout flow."
        },
        "category": {
          "type": "string",
          "maxLength": 100,
          "example": "web-development"
        }
      },
      "required": [
        "title",
        "description",
        "category"
      ]
    },
    "TemplateQuoteLineItemDto": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "example": "UI design & implementation"
        },
        "quantity": {
          "type": "number",
          "minimum": 1,
          "example": 1
        },
        "unitPrice": {
          "type": "number",
          "minimum": 0,
          "description": "Unit price in major currency units (e.g. rupees)",
          "example": 5000
        }
      },
      "required": [
        "description",
        "quantity",
        "unitPrice"
      ]
    },
    "TemplateQuoteDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "maxLength": 200,
          "example": "E-commerce MVP \u2014 Phase 1"
        },
        "description": {
          "type": "string",
          "maxLength": 5000,
          "example": "Scope covers design, build, and QA."
        },
        "items": {
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/TemplateQuoteLineItemDto"
          }
        },
        "taxPercentage": {
          "type": "number",
          "minimum": 0,
          "example": 18
        },
        "currency": {
          "type": "string",
          "maxLength": 3,
          "example": "INR"
        },
        "validUntil": {
          "type": "string",
          "example": "2026-07-01T23:59:59.000Z"
        },
        "termsAndConditions": {
          "type": "string",
          "maxLength": 2000
        },
        "internalNotes": {
          "type": "string",
          "maxLength": 1000
        },
        "scope": {
          "type": "object",
          "description": "Optional scope JSON copied from source"
        },
        "technicalDetails": {
          "type": "object",
          "description": "Optional technical details JSON"
        }
      },
      "required": [
        "title",
        "description",
        "validUntil"
      ]
    },
    "TemplateProjectMetaDto": {
      "type": "object",
      "properties": {
        "targetEndDate": {
          "type": "string",
          "example": "2026-08-01"
        }
      }
    },
    "TemplateMilestoneDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 200,
          "example": "Design sign-off"
        },
        "description": {
          "type": "string",
          "maxLength": 2000
        },
        "amount": {
          "type": "number",
          "minimum": 0,
          "description": "Amount in paise",
          "example": 250000
        },
        "percentage": {
          "type": "number",
          "minimum": 0,
          "example": 25
        },
        "dueDate": {
          "type": "string",
          "example": "2026-05-15"
        }
      },
      "required": [
        "name"
      ]
    },
    "DuplicateFromTemplateDto": {
      "type": "object",
      "properties": {
        "sourceProjectId": {
          "type": "string",
          "description": "Source project UUID used as template"
        },
        "clientId": {
          "type": "string",
          "description": "Target client user id",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "adminId": {
          "type": "string",
          "description": "Assigned admin / operator user id"
        },
        "lifecycle": {
          "type": "string",
          "enum": [
            "quote_draft"
          ],
          "default": "quote_draft",
          "description": "Only quote_draft is supported in v1 (client must approve quote)"
        },
        "request": {
          "$ref": "#/components/schemas/TemplateRequestDto"
        },
        "quote": {
          "$ref": "#/components/schemas/TemplateQuoteDto"
        },
        "project": {
          "$ref": "#/components/schemas/TemplateProjectMetaDto"
        },
        "milestones": {
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/TemplateMilestoneDto"
          }
        }
      },
      "required": [
        "sourceProjectId",
        "clientId",
        "request",
        "quote"
      ]
    },
    "ManageProjectTeamAdminDto": {
      "type": "object",
      "properties": {
        "memberId": {
          "type": "string",
          "description": "Identifier of the team member to associate with the project",
          "example": "admin-or-contractor-user-id"
        }
      },
      "required": [
        "memberId"
      ]
    },
    "AdminMilestoneDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 200,
          "description": "Milestone name",
          "example": "Design phase"
        },
        "description": {
          "type": "string",
          "maxLength": 2000,
          "description": "Milestone description",
          "example": "All design mockups approved"
        },
        "amount": {
          "type": "number",
          "description": "Milestone amount in smallest currency unit. Ignored (forced to 0) when the project already has a payment schedule \u2014 delivery milestones are non-billable.",
          "example": 0
        },
        "dueDate": {
          "type": "string",
          "description": "Optional due date for this milestone (ISO 8601)",
          "example": "2025-06-01"
        },
        "order": {
          "type": "number",
          "description": "Display order for this milestone (0-based)",
          "example": 1
        }
      },
      "required": [
        "name"
      ]
    },
    "CreateMilestonesAdminDto": {
      "type": "object",
      "properties": {
        "milestones": {
          "description": "List of milestones to create",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/AdminMilestoneDto"
          }
        }
      },
      "required": [
        "milestones"
      ]
    },
    "ExtendProjectAdminDto": {
      "type": "object",
      "properties": {
        "newDeadline": {
          "type": "string",
          "description": "New target end date for the project (ISO 8601)",
          "example": "2025-12-31"
        },
        "reason": {
          "type": "string",
          "maxLength": 1000,
          "description": "Reason for extending the project deadline",
          "example": "Client requested additional features"
        }
      },
      "required": [
        "newDeadline",
        "reason"
      ]
    },
    "CreatePortfolioDraftFromProjectDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "maxLength": 200,
          "description": "Override title for the portfolio draft"
        },
        "categoryId": {
          "type": "string",
          "description": "Portfolio category ID"
        },
        "promoteMediaIds": {
          "description": "Deliverable media IDs to promote into the portfolio gallery",
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "QuoteAcceptedEventDto": {
      "type": "object",
      "properties": {
        "quoteId": {
          "type": "string"
        },
        "requestId": {
          "type": "string"
        },
        "userId": {
          "type": "string",
          "description": "Client id from auth (seed users may use non-UUID ids e.g. test-user-002)."
        }
      },
      "required": [
        "quoteId",
        "requestId",
        "userId"
      ]
    }
  }
}

## auth.openapi

None

### POST /api/v1/auth/register
Register new account
Create a new user account and trigger an email verification process.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RegisterDto"}}}}
Security: []
Responses: {"201": {"description": "Account created successfully. Please verify your email.", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/RegisterResultDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/auth/login
User login
Authenticate with credentials to obtain a session or trigger 2FA if enabled.
Parameters: [{"name": "user-agent", "required": true, "in": "header", "schema": {"type": "string"}}, {"name": "origin", "required": true, "in": "header", "schema": {"type": "string"}}, {"name": "referer", "required": true, "in": "header", "schema": {"type": "string"}}, {"name": "host", "required": true, "in": "header", "schema": {"type": "string"}}, {"name": "x-forwarded-host", "required": true, "in": "header", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/LoginDto"}}}}
Security: []
Responses: {"200": {"description": "Login successful", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/LoginTokensDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}, "202": {"description": "Two-factor authentication required", "content": {"application/json": {"schema": {"$ref": "#/components/schemas/TwoFactorChallengeDto"}}}}}

### POST /api/v1/auth/refresh
Refresh access token
Obtain new access and refresh tokens using a valid refresh token.
Parameters: [{"name": "user-agent", "required": true, "in": "header", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RefreshTokenDto"}}}}
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/auth/logout
Logout current session
Invalidate the refresh-token session when provided, otherwise denylist the Bearer access token jti.
Parameters: [{"name": "x-user-id", "required": true, "in": "header", "schema": {"type": "string"}}, {"name": "authorization", "required": true, "in": "header", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/LogoutDto"}}}}
Security: []
Responses: {"200": {"description": "Logged out successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/auth/logout-all
Logout all sessions
Delete all stored sessions for the user. The current device will need to sign in again.
Security: [{"bearer": []}]
Responses: {"200": {"description": "All sessions revoked", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/auth/end-impersonation
End own impersonation session
Requires an impersonation access token. Marks the support session ended and revokes its access JTI.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Impersonation ended", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/auth/verify-2fa
Verify 2FA code
Complete the login process by providing a valid 2FA code (TOTP or Backup).
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Verify2FADto"}}}}
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/auth/verify-email
Verify email address
Confirm ownership of an email address using a token sent during registration or update.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/VerifyEmailDto"}}}}
Security: []
Responses: {"200": {"description": "Email verified successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/auth/resend-verification
Resend verification email
Request a new email verification link if the previous one expired or was lost.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ResendVerificationDto"}}}}
Security: []
Responses: {"200": {"description": "If your account requires verification, a new email has been sent.", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/auth/forgot-password
Forgot password
Send password reset instructions to the provided email address if an account exists.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ForgotPasswordDto"}}}}
Security: []
Responses: {"200": {"description": "If an account exists with this email, you will receive password reset instructions", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/auth/reset-password
Reset password
Set a new password for an account using a valid password recovery token.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ResetPasswordDto"}}}}
Security: []
Responses: {"200": {"description": "Password reset successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/auth/check-email
Validate email format (anti-enumeration)
Format-only check. Does not reveal whether an address is registered. `valid` and `available` both mirror format validity (anti-enumeration). Duplicate emails are rejected at register with 409. Send Turnstile token in the JSON body.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CheckEmailDto"}}}}
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/auth/check-email
Check email availability (deprecated GET)
Removed. Use POST /check-email with `{ email, turnstileToken }` in the body. Email in query strings leaks to logs/referrers.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "410": {"description": ""}}

### GET /api/v1/auth/health
Service health check
Verify that the authentication microservice is online and operational.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "RegisterResultDto": {
      "type": "object",
      "properties": {
        "userId": {
          "type": "string",
          "format": "uuid"
        },
        "email": {
          "type": "string"
        },
        "emailVerificationSent": {
          "type": "boolean"
        },
        "emailVerificationExpiresAt": {
          "type": "string",
          "format": "date-time"
        }
      },
      "required": [
        "userId",
        "email",
        "emailVerificationSent"
      ]
    },
    "RegisterDto": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "example": "newuser@example.com",
          "description": "Unique email address for registration"
        },
        "password": {
          "type": "string",
          "minLength": 8,
          "maxLength": 64,
          "pattern": "/((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$/",
          "example": "SecureP@ss123",
          "description": "Account password. Must be 8-64 characters and include uppercase, lowercase, number, and special character."
        },
        "firstName": {
          "type": "string",
          "minLength": 2,
          "maxLength": 50,
          "example": "John",
          "description": "User first name"
        },
        "lastName": {
          "type": "string",
          "minLength": 2,
          "maxLength": 50,
          "example": "Doe",
          "description": "User last name"
        },
        "phone": {
          "type": "string",
          "pattern": "/^\\+?[1-9]\\d{1,14}$/",
          "example": "+1234567890",
          "description": "Contact phone number in E.164 format"
        },
        "acceptTerms": {
          "type": "boolean",
          "example": true,
          "description": "Acceptance of platform terms of service"
        },
        "marketingConsent": {
          "type": "boolean",
          "example": false,
          "description": "Consent for marketing communications"
        },
        "turnstileToken": {
          "type": "string",
          "description": "Cloudflare Turnstile token. Required when TURNSTILE_SECRET_KEY is set in Infisical.",
          "example": "0.xtoken..."
        }
      },
      "required": [
        "email",
        "password",
        "firstName",
        "lastName",
        "acceptTerms"
      ]
    },
    "AuthUserSummaryDto": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uuid"
        },
        "email": {
          "type": "string",
          "example": "user@example.com"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        },
        "phone": {
          "type": "string",
          "description": "Contact phone in E.164 format",
          "example": "+919876543210"
        },
        "avatar": {
          "type": "string"
        },
        "role": {
          "type": "string",
          "example": "client"
        },
        "emailVerified": {
          "type": "boolean"
        },
        "twoFactorEnabled": {
          "type": "boolean"
        }
      },
      "required": [
        "id",
        "email"
      ]
    },
    "LoginTokensDto": {
      "type": "object",
      "properties": {
        "accessToken": {
          "type": "string"
        },
        "refreshToken": {
          "type": "string"
        },
        "expiresIn": {
          "type": "number",
          "example": 3600
        },
        "tokenType": {
          "type": "string",
          "example": "Bearer"
        },
        "user": {
          "$ref": "#/components/schemas/AuthUserSummaryDto"
        }
      },
      "required": [
        "accessToken",
        "refreshToken",
        "expiresIn",
        "tokenType",
        "user"
      ]
    },
    "LoginDto": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "example": "user@example.com",
          "description": "The registered primary email address of the account"
        },
        "password": {
          "type": "string",
          "example": "StrongP@ssw0rd!",
          "description": "The user account password"
        },
        "rememberMe": {
          "type": "boolean",
          "example": true,
          "description": "If true, a long-lived refresh token will be issued for persistent sessions"
        },
        "turnstileToken": {
          "type": "string",
          "description": "Cloudflare Turnstile token. Required on public login."
        },
        "portal": {
          "type": "string",
          "enum": [
            "client",
            "admin"
          ],
          "description": "Portal that initiated login. When set, ADMIN accounts are rejected on client and non-ADMIN on admin."
        }
      },
      "required": [
        "email",
        "password"
      ]
    },
    "TwoFactorChallengeDto": {
      "type": "object",
      "properties": {
        "requires2FA": {
          "type": "boolean",
          "example": true
        },
        "authSessionId": {
          "type": "string"
        },
        "methodsAvailable": {
          "example": [
            "totp"
          ],
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "requires2FA",
        "authSessionId",
        "methodsAvailable"
      ]
    },
    "RefreshTokenDto": {
      "type": "object",
      "properties": {
        "refreshToken": {
          "type": "string",
          "example": "ref_tok_1234567890abcdef",
          "description": "The valid refresh token issued during login"
        }
      },
      "required": [
        "refreshToken"
      ]
    },
    "LogoutDto": {
      "type": "object",
      "properties": {
        "refreshToken": {
          "type": "string",
          "example": "ref_tok_1234567890abcdef",
          "description": "Refresh token for the session to revoke. Optional when Authorization Bearer is present."
        }
      }
    },
    "Verify2FADto": {
      "type": "object",
      "properties": {
        "authSessionId": {
          "type": "string",
          "example": "auth_sess_12345678",
          "description": "The temporary authentication session ID issued after a successful first-factor login"
        },
        "code": {
          "type": "string",
          "minLength": 6,
          "maxLength": 10,
          "example": "123456",
          "description": "The numeric 6-digit TOTP code or an 8-10 character alphanumeric backup recovery code"
        },
        "method": {
          "type": "string",
          "enum": [
            "totp",
            "backupCode"
          ],
          "example": "totp",
          "description": "The type of second-factor verification being performed"
        },
        "rememberMe": {
          "type": "boolean",
          "example": true,
          "description": "Match the remember-me choice from the initial login step"
        }
      },
      "required": [
        "authSessionId",
        "code",
        "method"
      ]
    },
    "VerifyEmailDto": {
      "type": "object",
      "properties": {
        "token": {
          "type": "string",
          "example": "ver_tok_12345678",
          "description": "The email verification token received via email"
        }
      },
      "required": [
        "token"
      ]
    },
    "ResendVerificationDto": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "example": "user@example.com",
          "description": "The email address of the account to verify"
        }
      },
      "required": [
        "email"
      ]
    },
    "ForgotPasswordDto": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "example": "user@example.com",
          "description": "The registered primary email address for the account"
        },
        "turnstileToken": {
          "type": "string",
          "description": "Cloudflare Turnstile token. Required when TURNSTILE_SECRET_KEY is set in Infisical.",
          "example": "0.xtoken..."
        }
      },
      "required": [
        "email"
      ]
    },
    "ResetPasswordDto": {
      "type": "object",
      "properties": {
        "token": {
          "type": "string",
          "example": "pwd_tok_12345678",
          "description": "The unique password reset token received via email"
        },
        "newPassword": {
          "type": "string",
          "minLength": 8,
          "maxLength": 64,
          "pattern": "/((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$/",
          "example": "NewSecureP@ss123!",
          "description": "The new account password. Must be 8-64 characters and include uppercase, lowercase, number, and special character."
        },
        "password": {
          "type": "string",
          "minLength": 8,
          "maxLength": 64,
          "pattern": "/((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$/",
          "description": "Alias of newPassword accepted by the web client."
        },
        "turnstileToken": {
          "type": "string",
          "description": "Cloudflare Turnstile token. Required when TURNSTILE_SECRET_KEY is set in Infisical."
        }
      },
      "required": [
        "token"
      ]
    },
    "CheckEmailDto": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "example": "user@example.com"
        },
        "turnstileToken": {
          "type": "string",
          "description": "Cloudflare Turnstile token. Required when TURNSTILE_SECRET_KEY is set in Infisical."
        }
      },
      "required": [
        "email"
      ]
    }
  }
}

## blog.openapi

None

### POST /api/v1/posts/{slug}/comments
Post a comment
Submit a new root-level comment to a specified blog post.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateCommentDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/posts/{slug}/comments
Get post comments
Retrieve the public, approved comment thread for a specific blog post.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/posts/{slug}/comments/{commentId}/reply
Reply to comment
Submit nested feedback as a reply to an existing comment.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "commentId", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateCommentDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### PUT /api/v1/posts/{slug}/comments/{commentId}
Update comment (PUT)
Modify the textual body of a comment previously authored by the user.
Parameters: [{"name": "commentId", "required": true, "in": "path", "description": "Comment UUID", "schema": {"type": "string"}}, {"name": "slug", "required": true, "in": "path", "description": "Post URL slug", "schema": {}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateCommentDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/posts/{slug}/comments/{commentId}
Update comment (PATCH)
Modify the textual body of a comment previously authored by the user.
Parameters: [{"name": "commentId", "required": true, "in": "path", "description": "Comment UUID", "schema": {"type": "string"}}, {"name": "slug", "required": true, "in": "path", "description": "Post URL slug", "schema": {}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateCommentDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/posts/{slug}/comments/{commentId}
Delete comment
Mark a specific comment as deleted by its author.
Parameters: [{"name": "commentId", "required": true, "in": "path", "description": "Comment UUID", "schema": {"type": "string"}}, {"name": "slug", "required": true, "in": "path", "description": "Post URL slug", "schema": {}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/posts/{slug}/comments/{commentId}/replies
Get comment replies
Retrieve all nested responses for a specific parent comment.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "commentId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/posts/{slug}/comments/{commentId}/report
Report comment
Flag a specific comment for review due to community guideline violations.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "commentId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/posts/{slug}/comments/{commentId}/like
Like comment
Add a like to a blog post comment.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "commentId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/posts/{slug}/like
Toggle like
Like or unlike a blog post.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/posts/{slug}/engagement
Get post engagement
Fetch like/bookmark state and counts for the authenticated user.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/posts/{slug}/bookmark
Bookmark post
Save a blog post to the user's personal bookmarks.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### DELETE /api/v1/posts/{slug}/bookmark
Remove bookmark
Remove a previously saved blog post from the user's bookmarks.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/posts/{slug}/views
Track authenticated view
Record a post view specifically for a logged-in user context.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/posts/{slug}/share
Track share
Record that a post has been shared by the user.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/posts
List published posts
Retrieve a paginated list of blog posts that are currently published and visible to the public.
Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "categoryId", "required": false, "in": "query", "description": "Filter result set by a specific primary category identifier", "schema": {"example": "550e8400-e29b-41d4-a716-446655440000", "type": "string"}}, {"name": "tag", "required": false, "in": "query", "description": "Filter result set by a specific taxonomy tag name", "schema": {"example": "typescript", "type": "string"}}, {"name": "authorId", "required": false, "in": "query", "description": "Filter result set by a specific author user account", "schema": {"example": "550e8400-e29b-41d4-a716-446655440000", "type": "string"}}, {"name": "search", "required": false, "in": "query", "description": "Search keyword to match against post titles, excerpts, or content bodies", "schema": {"example": "nest-js", "type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/posts/search
Search blog posts
Perform a full-text search across published blog posts titles and content.
Parameters: [{"name": "q", "required": true, "in": "query", "description": "The search query string (minimum 2 characters, no control characters)", "schema": {"minLength": 2, "pattern": "/^[^\\u0000-\\u001F\\u007F]+$/", "example": "microservices", "type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/posts/health
Service health check
Verify that the blog microservice is online and operational.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/posts/{slug}
Get post detail
Fetch the full content, author info, and metadata of a specific blog post.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/posts/{slug}/related
Get related posts
Retrieve a collection of blog posts that are semantically or taxonomically similar to the given post.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/posts/{slug}/view
Record post view
Explicitly record a reader view event for a specific blog post.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/categories
List categories
Fetch all available blog categories for navigation and filtering.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/categories/{slug}
Get category detail
Retrieve metadata and metadata for a specific blog category.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/categories/{slug}/posts
Get posts by category
Fetch a paginated list of published blog posts associated with a specific category.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/tags
List tags
Fetch all available blog tags used for content discovery.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/tags/{slug}
Get tag detail
Retrieve metadata and metadata for a specific blog tag.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/tags/{slug}/posts
Get posts by tag
Fetch a paginated list of published blog posts that share a specific tag.
Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/authors
List authors
Fetch all available blog authors and their basic profile information.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/authors/{id}
Get author detail
Retrieve professional metadata and authored posts for a specific user.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/feed/rss
Get global RSS feed
Retrieve the latest published blog posts in standard RSS 2.0 format.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/feed/atom
Get global Atom feed
Retrieve the latest published blog posts in standard Atom format.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/comments/{commentId}
Get comment by ID
Retrieve detailed record for a single comment entry.
Parameters: [{"name": "commentId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/comments/{commentId}
Patch comment
Directly modify attributes of a comment record.
Parameters: [{"name": "commentId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/comments/{commentId}
Delete standalone comment
Directly remove a comment record from the system.
Parameters: [{"name": "commentId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/comments/{commentId}/replies
Get standalone replies
Fetch all hierarchical replies for a specific comment ID.
Parameters: [{"name": "commentId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/comments/{commentId}/reply
Reply standalone
Submit a response to a comment without post context.
Parameters: [{"name": "commentId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/comments/{commentId}/report
Report standalone comment
Flag a specific comment record for administrative review.
Parameters: [{"name": "commentId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/comments/{commentId}/like
Like standalone comment
Add a like to a specific comment record.
Parameters: [{"name": "commentId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/bookmarks
List bookmarked posts
Fetch all blog posts that the current user has saved to their bookmarks.
Parameters: [{"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/posts
List all posts (Admin)
Retrieve a comprehensive paginated list of all blog posts, including drafts, scheduled, and deleted entries.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/posts
Create blog post
Initialize a new blog post entry. Status defaults to DRAFT upon creation.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreatePostDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/posts/{id}
Get post detail (Admin)
Fetch full configuration and historical metadata for a specific blog post entry.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/posts/{id}
Update blog post
Apply partial updates to post content, taxonomy, or configuration.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdatePostDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/posts/{id}
Delete blog post
Perform a soft-deletion of the blog post, archival only.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/posts/{id}/publish
Publish post
Immediately transition a post status to PUBLISHED and record the timestamp.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/posts/{id}/unpublish
Unpublish post
Transition a published or scheduled post back to DRAFT status.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/posts/{id}/schedule
Schedule post publication
Define the future date and time for automated post publication.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/SchedulePostDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/posts/{id}/feature
Feature blog post
Mark a post as a featured piece of content for site-wide promotion.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/posts/{id}/unfeature
Unfeature blog post
Remove the featured status flag from a blog post.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/posts/{id}/pin
Pin blog post
Pin a post to ensure it remains at the top of categorized listings.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/posts/{id}/unpin
Unpin blog post
Remove the pinned status from a blog post.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/posts/{id}/duplicate
Duplicate post
Create a new draft post by copying content and settings from an existing post.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/posts/{id}/archive
Archive post
Permanently archive a post, removing it from active management queues.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/posts/{id}/revisions
Get post revisions
Fetch the audit trail and content history for a specific post.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/posts/{id}/revisions/{revisionId}/restore
Restore revision
Roll back a post to a previously saved content state.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "revisionId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/posts/import
Import posts
Batch process and import blog content from standardized JSON/CSV formats.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/posts/export
Export posts
Initiate a background export of blog content for data portability.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### PATCH /api/v1/admin/posts/settings
Update blog settings
Modify service-level configurations such as default pagination, moderation rules, etc.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/comments
List all comments (Admin)
Retrieve a global paginated list of all blog comments for review and management.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/comments/pending
List pending comments (Admin)
Fetch all comments awaiting administrative approval before public display.
Parameters: [{"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/comments/reported
List reported comments (Admin)
Fetch comments that have been flagged as potentially violative by site users.
Parameters: [{"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/comments/{id}/approve
Approve comment
Explicitly approve a comment for public visibility.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/comments/{id}/reject
Reject comment
Explicitly reject an inappropriate or non-compliant comment.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/comments/{id}/spam
Mark as spam
Classify a comment as spam and apply system-wide filtering if necessary.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/comments/{id}/pin
Pin comment (Admin)
Ensure a specific comment stays at the top of the post thread.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/comments/{id}/unpin
Unpin comment (Admin)
Remove the pinned status from a comment.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### DELETE /api/v1/admin/comments/{id}
Delete comment (Admin)
Permanently remove a comment from the database.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/comments/{id}/reply
Post admin reply
Submit an official response as a blog administrator.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/blog/categories
List all categories
Fetch all blog categories including their internal metadata.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/blog/categories
Create category
Define a new organizational category for blog posts.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateCategoryDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### PATCH /api/v1/admin/blog/categories/{id}
Update category
Modify the name, slug, or description of an existing category.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateCategoryDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/blog/categories/{id}
Delete category
Remove a blog category from the system.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/blog/tags
List all tags
Fetch all blog tags used across the system.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/blog/tags
Create tag
Define a new blog tag for content categorization.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateTagDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### PATCH /api/v1/admin/blog/tags/{id}
Update tag
Modify the name or slug of an existing blog tag.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateTagDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/blog/tags/{id}
Delete tag
Remove a blog tag from the system.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/blog/tags/merge
Merge tags
Consolidate multiple tags into one and update all associated blog posts.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/MergeTagsDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/blog/authors
List all authors
Fetch all blog authors and their associated metadata for management.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/blog/analytics
Get general analytics
Retrieve aggregated performance data for the entire blog service.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/blog/analytics/top-posts
Get top posts
Fetch the most popular blog posts based on traffic and engagement.
Parameters: [{"name": "period", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/blog/analytics/engagement
Get engagement metrics
Retrieve detailed interaction data including likes, comments, and shares.
Parameters: [{"name": "from", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "to", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/blog/analytics/{id}
Get single post analytics
Retrieve deep-dive performance data for a specific blog post entry.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "CreateCommentDto": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "minLength": 1,
          "maxLength": 2000,
          "example": "Great article! Very helpful.",
          "description": "The body text content of the comment. Supports plain text."
        },
        "parentId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000",
          "description": "The unique identifier of the parent comment if this is a reply in a nested thread."
        }
      },
      "required": [
        "content"
      ]
    },
    "UpdateCommentDto": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "minLength": 1,
          "maxLength": 2000,
          "example": "Updated comment content...",
          "description": "The revised body text for the comment."
        }
      },
      "required": [
        "content"
      ]
    },
    "CreatePostDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "maxLength": 200,
          "example": "Building Scalable Microservices",
          "description": "The primary title of the blog post. Used for SEO and display."
        },
        "slug": {
          "type": "string",
          "pattern": "/^[a-z0-9-]+$/",
          "example": "building-scalable-microservices",
          "description": "URL-friendly slug. If not provided, it will be auto-generated from the title."
        },
        "excerpt": {
          "type": "string",
          "maxLength": 500,
          "example": "A deep dive into microservices architecture...",
          "description": "A concise summary of the post content designed for search results and previews."
        },
        "content": {
          "type": "string",
          "maxLength": 100000,
          "example": "# My Post Content...",
          "description": "The full substantive body text of the blog post."
        },
        "contentFormat": {
          "enum": [
            "MARKDOWN",
            "HTML"
          ],
          "type": "string",
          "example": "MARKDOWN",
          "description": "The syntax format used for the content body (defaults to MARKDOWN)"
        },
        "featuredImageId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000",
          "description": "The unique identifier of the uploaded featured media asset"
        },
        "categoryId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000",
          "description": "The unique identifier of the primary category for this post"
        },
        "tags": {
          "example": [
            "typescript",
            "node"
          ],
          "description": "A collection of tags for granular content discoverability",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "authorId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000",
          "description": "The unique identifier of the author. Defaults to the current user if not specified."
        },
        "seo": {
          "type": "object",
          "description": "Custom SEO metadata including meta-titles, keywords, and description."
        },
        "commentsEnabled": {
          "type": "boolean",
          "example": true,
          "description": "Flag to determine if user comments are permitted on this specific post"
        }
      },
      "required": [
        "title",
        "excerpt",
        "content"
      ]
    },
    "UpdatePostDto": {
      "type": "object",
      "properties": {}
    },
    "SchedulePostDto": {
      "type": "object",
      "properties": {
        "scheduledAt": {
          "type": "string"
        }
      },
      "required": [
        "scheduledAt"
      ]
    },
    "CreateCategoryDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 100,
          "example": "Technology",
          "description": "The user-facing display name of the blog category"
        },
        "slug": {
          "type": "string",
          "example": "technology",
          "description": "The unique URL-friendly slug for the category. Auto-generated from name if omitted."
        },
        "description": {
          "type": "string",
          "example": "Posts about the latest in industry technology trends...",
          "description": "A brief description of the classification or purpose of this category"
        }
      },
      "required": [
        "name"
      ]
    },
    "UpdateCategoryDto": {
      "type": "object",
      "properties": {}
    },
    "CreateTagDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 50,
          "example": "typescript",
          "description": "The unique, case-insensitive identifier name for the taxonomy tag"
        },
        "slug": {
          "type": "string",
          "maxLength": 80,
          "example": "typescript",
          "description": "URL slug. Auto-generated from name if omitted."
        }
      },
      "required": [
        "name"
      ]
    },
    "UpdateTagDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 50,
          "example": "node-js",
          "description": "The updated display name for the specified tag"
        }
      },
      "required": [
        "name"
      ]
    },
    "MergeTagsDto": {
      "type": "object",
      "properties": {
        "fromTagId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000",
          "description": "The unique identifier of the source tag that will be merged and potentially removed"
        },
        "toTagId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440001",
          "description": "The unique identifier of the target tag that will receive all associated post references"
        }
      },
      "required": [
        "fromTagId",
        "toTagId"
      ]
    }
  }
}

## requests.openapi

None

### GET /api/v1/requests/health
Service health check
Confirm that the project requests microservice is reachable and functioning correctly.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/requests
Create a new request
Register a new project proposal in the system as a draft.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateRequestDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Request created successfully in draft status", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/requests
List my requests
Fetch all project proposals you have created, including drafts and submitted items.
Parameters: [{"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "status", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/requests/stats
Get user request statistics
Retrieves aggregated request statistics for the current user.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/requests/{id}/status
Get request status timeline
Retrieves the complete status transition history for a specific request.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/requests/{id}
Get request details
Retrieves full details for a specific project request.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/requests/{id}
Update request
Updates an existing draft or active project request.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateRequestDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Request updated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/requests/{id}
Delete request
Removes a project request record.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Request deleted successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/requests/{id}/submit
Submit request for review
Formally submits a draft request for review and quoting.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Request submitted successfully. You will receive a quote within 24-48 hours.", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/requests/{id}/attachments
List request attachments

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/requests/{id}/attachments
Upload attachment
Uploads a new file attachment to a request.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"multipart/form-data": {"schema": {"type": "object", "properties": {"file": {"type": "string", "format": "binary"}}}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Attachment uploaded successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### DELETE /api/v1/requests/{id}/attachments/{attachmentId}
Delete attachment
Deletes a specific attachment from a project request.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}, {"name": "attachmentId", "required": true, "in": "path", "description": "Attachment UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Attachment removed successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/requests/{id}/attachments/{attachmentId}/download
Get attachment download URL
Returns a presigned download URL for a request attachment.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}, {"name": "attachmentId", "required": true, "in": "path", "description": "Attachment UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/requests/{id}/quotes
Get quotes for a request
Retrieves all official quotes issued for a specific client request.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/requests
List all requests (Admin)
Access the system-wide repository of all project proposals for review.
Parameters: [{"name": "page", "required": false, "in": "query", "description": "Page number", "schema": {"example": "1", "type": "string"}}, {"name": "limit", "required": false, "in": "query", "description": "Results per page", "schema": {"example": "20", "type": "string"}}, {"name": "status", "required": false, "in": "query", "description": "Filter by request status, or use queue shortcuts: inbox (submitted + under review + changes requested), all (include drafts). Default excludes client drafts.", "schema": {"example": "inbox", "type": "string"}}, {"name": "userId", "required": false, "in": "query", "description": "Filter by client user ID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/requests/stats
Get overall request statistics
Access administrative KPIs and volume data for all user project proposals.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/requests/capacity/dashboard
Admin capacity usage dashboard

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/requests/settings/capacity
Update admin capacity settings

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/requests/{id}
Get request administrative details
Retrieve detailed metadata, content, and history for any project proposal.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/requests/{id}
Update request details (Admin)
Updates an existing request's core details (Admin override).
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateRequestAdminDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Request updated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/requests/{id}
Delete request (Admin)
Permanent removal of a project request record (Admin only).
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "204": {"description": "Request deleted"}}

### PATCH /api/v1/admin/requests/{id}/status
Update request status (Admin)
Transitions a request to a new status and adds administrative notes.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateRequestStatusDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Request status updated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/requests/{id}/quotes
Create quote from request
Issues a formal quote based on a reviewed project request.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateQuoteDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Quote created successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/requests/{id}/quotes/prefill
Get quote prefill suggestions from a past quote
Returns suggested line items and terms for admin review. Does not persist — use POST /admin/requests/:id/quotes to create.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Target request UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/QuotePrefillDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/requests/{id}/notes
Add internal note
Adds an internal administrative note to a request record.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/AddNoteDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Internal note added", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/requests/{id}/notes
List request notes
Lists all internal notes associated with a project request.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/requests/{id}/assign
Assign request to staff
Assigns a staff member or team to a specific project request.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/AssignRequestDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Request assigned successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/requests/{id}/attachments/{attachmentId}/download
Get attachment download URL (Admin)

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Request UUID", "schema": {"type": "string"}}, {"name": "attachmentId", "required": true, "in": "path", "description": "Attachment UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/services
List active service packages

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/services/{slug}
Get service package by slug

Parameters: [{"name": "slug", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/service-packages
List all service packages (including inactive)

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/service-packages
Create or upsert service package
Upserts by unique slug. Safe for repeated seed runs.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpsertServicePackageDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### PATCH /api/v1/admin/service-packages/{id}
Update service package by id

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Package UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "BudgetDto": {
      "type": "object",
      "properties": {
        "min": {
          "type": "number",
          "minimum": 0,
          "description": "Minimum estimated budget in rupees (major units). Stored as paise server-side.",
          "example": 5000
        },
        "max": {
          "type": "number",
          "minimum": 0,
          "description": "Maximum estimated budget in rupees (major units). Stored as paise server-side.",
          "example": 15000
        },
        "currency": {
          "type": "string",
          "maxLength": 3,
          "description": "ISO currency code for the budget",
          "example": "INR"
        },
        "flexible": {
          "type": "boolean",
          "description": "Whether the budget is open to negotiation",
          "example": true
        }
      },
      "required": [
        "min",
        "max",
        "currency",
        "flexible"
      ]
    },
    "TimelineDto": {
      "type": "object",
      "properties": {
        "preferredStartDate": {
          "type": "string",
          "description": "Preferred project kickoff date",
          "example": "2024-12-01T00:00:00Z"
        },
        "deadline": {
          "type": "string",
          "description": "Target date for project completion",
          "example": "2025-05-01T23:59:59Z"
        },
        "flexible": {
          "type": "boolean",
          "description": "Whether the project deadlines are flexible",
          "example": false
        }
      },
      "required": [
        "preferredStartDate",
        "deadline",
        "flexible"
      ]
    },
    "TechnicalRequirementsDto": {
      "type": "object",
      "properties": {
        "preferredTechnologies": {
          "description": "Preferred technology stack or languages",
          "example": [
            "NestJS",
            "React",
            "PostgreSQL"
          ],
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "hosting": {
          "type": "string",
          "description": "Hosting or infrastructure preferences",
          "example": "AWS / Vercel"
        },
        "integrations": {
          "description": "Third-party APIs or services to integrate",
          "example": [
            "Stripe",
            "SendGrid",
            "OpenAI"
          ],
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "CreateRequestDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "minLength": 5,
          "maxLength": 100,
          "description": "Succinct and descriptive title for the request",
          "example": "Build a Custom CRM for Real Estate"
        },
        "description": {
          "type": "string",
          "minLength": 20,
          "maxLength": 5000,
          "description": "Detailed explanation of the project scope and requirements",
          "example": "We need a robust CRM system to manage lead flow, automated emails, and agent performance tracking..."
        },
        "category": {
          "type": "string",
          "enum": [
            "webDevelopment",
            "mobileApp",
            "ecommerce",
            "design",
            "branding",
            "marketing",
            "seo",
            "consulting",
            "maintenance",
            "custom"
          ],
          "description": "The primary service category for this request",
          "example": "webDevelopment"
        },
        "budget": {
          "description": "Financial constraints and configuration",
          "allOf": [
            {
              "$ref": "#/components/schemas/BudgetDto"
            }
          ]
        },
        "timeline": {
          "description": "Project timing and flexibility requirements",
          "allOf": [
            {
              "$ref": "#/components/schemas/TimelineDto"
            }
          ]
        },
        "requirements": {
          "description": "Specific functional or business requirements",
          "example": [
            "User authentication",
            "Dashboard analytics",
            "PDF reporting"
          ],
          "maxItems": 20,
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "technicalRequirements": {
          "description": "Technical stack and infra preferences",
          "allOf": [
            {
              "$ref": "#/components/schemas/TechnicalRequirementsDto"
            }
          ]
        },
        "attachments": {
          "description": "Array of media/file UUIDs for any supporting documentation provided by the client",
          "example": [
            "550e8400-e29b-41d4-a716-446655440003"
          ],
          "maxItems": 10,
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "additionalInfo": {
          "type": "string",
          "maxLength": 2000,
          "description": "Any other relevant information not captured in the description or technical requirements",
          "example": "We prefer a phased rollout with the MVP being ready by Q1."
        },
        "referencePortfolioItemId": {
          "type": "string",
          "description": "Published portfolio item that inspired this request"
        },
        "servicePackageId": {
          "type": "string",
          "description": "Optional service catalog package this request is based on",
          "example": "550e8400-e29b-41d4-a716-446655440099"
        }
      },
      "required": [
        "title",
        "description",
        "category",
        "budget",
        "timeline",
        "requirements"
      ]
    },
    "UpdateRequestDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "minLength": 5,
          "maxLength": 100,
          "description": "Succinct and descriptive title for the request",
          "example": "Build a Custom CRM for Real Estate"
        },
        "description": {
          "type": "string",
          "minLength": 20,
          "maxLength": 5000,
          "description": "Detailed explanation of the project scope and requirements",
          "example": "We need a robust CRM system to manage lead flow, automated emails, and agent performance tracking..."
        },
        "category": {
          "type": "string",
          "enum": [
            "webDevelopment",
            "mobileApp",
            "ecommerce",
            "design",
            "branding",
            "marketing",
            "seo",
            "consulting",
            "maintenance",
            "custom"
          ],
          "description": "The primary service category for this request",
          "example": "webDevelopment"
        },
        "budget": {
          "description": "Financial constraints and configuration",
          "allOf": [
            {
              "$ref": "#/components/schemas/BudgetDto"
            }
          ]
        },
        "timeline": {
          "description": "Project timing and flexibility requirements",
          "allOf": [
            {
              "$ref": "#/components/schemas/TimelineDto"
            }
          ]
        },
        "requirements": {
          "description": "Specific functional or business requirements",
          "example": [
            "User authentication",
            "Dashboard analytics",
            "PDF reporting"
          ],
          "maxItems": 20,
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "technicalRequirements": {
          "description": "Technical stack and infra preferences",
          "allOf": [
            {
              "$ref": "#/components/schemas/TechnicalRequirementsDto"
            }
          ]
        },
        "attachments": {
          "description": "Array of media/file UUIDs for any supporting documentation provided by the client",
          "example": [
            "550e8400-e29b-41d4-a716-446655440003"
          ],
          "maxItems": 10,
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "additionalInfo": {
          "type": "string",
          "maxLength": 2000,
          "description": "Any other relevant information not captured in the description or technical requirements",
          "example": "We prefer a phased rollout with the MVP being ready by Q1."
        },
        "referencePortfolioItemId": {
          "type": "string",
          "description": "Published portfolio item that inspired this request"
        },
        "servicePackageId": {
          "type": "string",
          "description": "Optional service catalog package this request is based on",
          "example": "550e8400-e29b-41d4-a716-446655440099"
        }
      }
    },
    "UpdateRequestStatusDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "draft",
            "submitted",
            "underReview",
            "quoted",
            "accepted",
            "rejected",
            "convertedToProject",
            "changesRequested"
          ],
          "description": "The new target status: draft (editable), submitted (awaiting review), underReview, quoted, accepted, rejected, convertedToProject, changesRequested",
          "example": "underReview"
        },
        "notes": {
          "type": "string",
          "minLength": 5,
          "maxLength": 1000,
          "description": "Administrative reason or context for the status transition",
          "example": "Moving to review after client confirmation of budget."
        }
      },
      "required": [
        "status"
      ]
    },
    "QuoteItemDto": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "description": "Detailed description of the service or component",
          "example": "Frontend UI Implementation - Dashboard"
        },
        "quantity": {
          "type": "number",
          "minimum": 0,
          "description": "Quantity or hours for the item",
          "example": 1
        },
        "unitPrice": {
          "type": "number",
          "minimum": 0,
          "description": "Price per unit in major currency (e.g. \u20b92,500.00). Stored as paise server-side.",
          "example": 2500
        }
      },
      "required": [
        "description",
        "quantity",
        "unitPrice"
      ]
    },
    "PaymentScheduleInstallmentDto": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "description": "Installment label shown to client",
          "example": "Deposit"
        },
        "percentage": {
          "type": "number",
          "minimum": 0,
          "description": "Percentage of quote total (use this OR amount, not both required)",
          "example": 30
        },
        "amount": {
          "type": "number",
          "minimum": 0,
          "description": "Fixed amount in major currency (e.g. rupees). Use when not using percentage.",
          "example": 15000
        },
        "dueTrigger": {
          "type": "string",
          "enum": [
            "on_accept",
            "on_prior_approved",
            "on_date"
          ],
          "description": "When this installment becomes payable",
          "example": "on_accept"
        },
        "dueDate": {
          "type": "string",
          "description": "Due date (required when dueTrigger is on_date)",
          "example": "2025-03-01T00:00:00Z"
        }
      },
      "required": [
        "label"
      ]
    },
    "CreateQuoteDto": {
      "type": "object",
      "properties": {
        "prefillFromPackage": {
          "type": "boolean",
          "description": "When true and request has servicePackageId, prefill items from package deliverables if items is empty.",
          "example": true
        },
        "includePackageAddOns": {
          "type": "boolean",
          "description": "Include optional add-ons from service package when prefillFromPackage is true",
          "example": false
        },
        "items": {
          "description": "List of line items comprising the quote total (billing breakdown)",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/QuoteItemDto"
          }
        },
        "schedulePreset": {
          "type": "string",
          "enum": [
            "50-50",
            "30-70",
            "30-40-30",
            "25-25-25-25",
            "100-upfront"
          ],
          "description": "Built-in payment schedule preset. Used when paymentSchedule is omitted. Defaults to 50-50.",
          "example": "30-70"
        },
        "paymentSchedule": {
          "description": "Custom payment installments (amounts in major currency or percentages). Overrides schedulePreset.",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/PaymentScheduleInstallmentDto"
          }
        },
        "currency": {
          "type": "string",
          "maxLength": 3,
          "description": "ISO currency code for the quote",
          "example": "INR"
        },
        "taxPercentage": {
          "type": "number",
          "minimum": 0,
          "description": "Tax percentage to apply to the subtotal",
          "example": 10
        },
        "validUntil": {
          "type": "string",
          "description": "Quote expiration date",
          "example": "2024-12-31T23:59:59Z"
        },
        "termsAndConditions": {
          "type": "string",
          "maxLength": 2000,
          "description": "Project-specific terms added on top of the platform standard terms (payment milestones, scope boundaries, client responsibilities, etc.)",
          "example": "30% deposit on acceptance. Client provides brand assets within 5 business days of kickoff."
        },
        "internalNotes": {
          "type": "string",
          "maxLength": 1000,
          "description": "Internal administrative or project management notes",
          "example": "Priority client. Standard rates applied."
        },
        "requiresContract": {
          "type": "boolean",
          "description": "Whether client must sign contract before deposit (enterprise clients)",
          "example": false
        },
        "revisionsIncluded": {
          "type": "number",
          "minimum": 0,
          "description": "Number of revision rounds included in this quote",
          "example": 2
        },
        "additionalRevisionCost": {
          "type": "number",
          "minimum": 0,
          "description": "Overflow fee per additional revision in major currency (paise stored server-side)",
          "example": 5000
        },
        "applyClientTierDiscount": {
          "type": "boolean",
          "description": "When true, apply the client tier discount (e.g. VIP 10%) to computed list-price totals. Default false \u2014 never silently rewrite admin totals (NL-BUG-PAY-001).",
          "example": false
        }
      },
      "required": [
        "currency",
        "taxPercentage",
        "validUntil"
      ]
    },
    "QuotePrefillDto": {
      "type": "object",
      "properties": {
        "sourceQuoteId": {
          "type": "string",
          "description": "Source quote UUID to copy structure from"
        }
      },
      "required": [
        "sourceQuoteId"
      ]
    },
    "AddNoteDto": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "maxLength": 2000,
          "description": "The textual content of the note",
          "example": "Initial draft looks good, but need more clarity on the cloud provider requirements."
        }
      },
      "required": [
        "content"
      ]
    },
    "UpdateRequestAdminDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "minLength": 5,
          "maxLength": 100
        },
        "description": {
          "type": "string",
          "minLength": 20,
          "maxLength": 5000
        },
        "category": {
          "type": "string",
          "enum": [
            "webDevelopment",
            "mobileApp",
            "ecommerce",
            "design",
            "branding",
            "marketing",
            "seo",
            "consulting",
            "maintenance",
            "custom"
          ]
        },
        "additionalInfo": {
          "type": "string",
          "maxLength": 2000
        },
        "timeframe": {
          "type": "string",
          "maxLength": 100
        }
      }
    },
    "AssignRequestDto": {
      "type": "object",
      "properties": {
        "assigneeId": {
          "type": "string",
          "maxLength": 64,
          "description": "User id of an active admin to assign this request to"
        }
      },
      "required": [
        "assigneeId"
      ]
    },
    "UpsertServicePackageDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 120,
          "example": "Web Application MVP"
        },
        "slug": {
          "type": "string",
          "maxLength": 80,
          "example": "web-application-mvp"
        },
        "description": {
          "type": "string"
        },
        "category": {
          "type": "string",
          "example": "webDevelopment"
        },
        "basePricePaise": {
          "type": "number",
          "minimum": 0,
          "description": "Price in paise (preferred for seed payloads)",
          "example": 5900000
        },
        "basePrice": {
          "type": "number",
          "minimum": 0,
          "description": "Price in major currency units (e.g. INR)",
          "example": 59000
        },
        "estimatedDays": {
          "type": "number",
          "minimum": 1,
          "example": 30
        },
        "revisionsIncluded": {
          "type": "number",
          "minimum": 0,
          "example": 2
        },
        "deliverables": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "addOns": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "isActive": {
          "type": "boolean",
          "example": true
        },
        "sortOrder": {
          "type": "number",
          "example": 10
        },
        "id": {
          "type": "string",
          "description": "Stable UUID when seeding known IDs"
        }
      },
      "required": [
        "name",
        "slug",
        "description",
        "category"
      ]
    }
  }
}

## contact.openapi

None

### GET /api/v1/contact/health
Contact service health check
Check if the contact service is operational.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/contact
Submit contact inquiry
Submit a new message or inquiry through the contact form.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/SubmitContactDto"}}}}
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/contact
List all inquiries
Retrieve a paginated list of all contact inquiries received with statistics.
Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "status", "required": false, "in": "query", "description": "Filter by inquiry status", "schema": {"enum": ["NEW", "READ", "RESPONDED", "ARCHIVED", "SPAM"], "type": "string"}}, {"name": "sortBy", "required": false, "in": "query", "description": "Field to sort by", "schema": {"default": "createdAt", "example": "createdAt", "type": "string"}}, {"name": "order", "required": false, "in": "query", "description": "Sort direction", "schema": {"default": "DESC", "enum": ["ASC", "DESC"], "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/contact/{id}
Get inquiry details
Retrieve exhaustive metadata and content for a specific contact inquiry.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/contact/{id}
Delete inquiry
Remove a contact inquiry record from the active administrative view.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/contact/{id}/status
Update inquiry status
Transition an inquiry between states like PENDING, RESPONDED, or RESOLVED.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateContactStatusDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/contact/{id}/respond
Respond to inquiry
Send a professional response to a contact inquiry and notify the requester.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RespondContactDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/contact/{id}/spam
Mark as spam
Identify an inquiry as illegitimate content and update its internal classification.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "SubmitContactDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 100,
          "example": "John Doe",
          "description": "The full legal or preferred name of the person submitting the inquiry"
        },
        "email": {
          "type": "string",
          "example": "john.doe@example.com",
          "description": "The verified email address for receiving administrative responses"
        },
        "subject": {
          "enum": [
            "GENERAL",
            "SUPPORT",
            "SALES",
            "BILLING",
            "PARTNERSHIP",
            "BUG_REPORT",
            "OTHER"
          ],
          "type": "string",
          "example": "GENERAL",
          "description": "The primary classification or topic of the inquiry"
        },
        "message": {
          "type": "string",
          "minLength": 10,
          "maxLength": 5000,
          "example": "I would like to discuss a potential partnership regarding the API ecosystem.",
          "description": "The detailed textual content of the message body"
        },
        "turnstileToken": {
          "type": "string",
          "description": "Cloudflare Turnstile token. Required when TURNSTILE_SECRET_KEY is set in Infisical."
        },
        "referencePortfolioItemId": {
          "type": "string",
          "description": "Portfolio item that inspired this inquiry"
        }
      },
      "required": [
        "name",
        "email",
        "subject",
        "message"
      ]
    },
    "UpdateContactStatusDto": {
      "type": "object",
      "properties": {
        "status": {
          "enum": [
            "NEW",
            "READ",
            "RESPONDED",
            "ARCHIVED",
            "SPAM"
          ],
          "type": "string",
          "description": "The new status to assign to the inquiry"
        }
      },
      "required": [
        "status"
      ]
    },
    "RespondContactDto": {
      "type": "object",
      "properties": {
        "subject": {
          "type": "string",
          "maxLength": 200,
          "example": "RE: Your inquiry about services",
          "description": "Subject line of the response email. When omitted, the service defaults to Re: <inquiry subject>."
        },
        "message": {
          "type": "string",
          "maxLength": 10000,
          "example": "Hello, thank you for reaching out...",
          "description": "The body content of the response"
        },
        "markAsResponded": {
          "type": "boolean",
          "default": true,
          "example": true,
          "description": "Whether to automatically mark the inquiry as resolved/responded"
        }
      },
      "required": [
        "message"
      ]
    }
  }
}

## admin.openapi

None

### GET /api/health
Admin service health

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/audit
List audit logs
Retrieve a paginated list of system audit logs with optional filtering.
Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "userId", "required": false, "in": "query", "description": "Filter logs by the user who performed the action", "schema": {"example": "550e8400-e29b-41d4-a716-446655440000", "type": "string"}}, {"name": "resourceType", "required": false, "in": "query", "description": "Filter logs by the category of system resource affected", "schema": {"example": "Project", "type": "string"}}, {"name": "action", "required": false, "in": "query", "description": "Filter logs by the specific action executed", "schema": {"example": "USER_LOGIN", "type": "string"}}, {"name": "from", "required": false, "in": "query", "description": "Start date for the audit trail report", "schema": {"example": "2023-01-01", "type": "string"}}, {"name": "to", "required": false, "in": "query", "description": "End date for the audit trail report", "schema": {"example": "2023-12-31", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Logs retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/audit/logs
List audit logs (alias)
Same as GET /audit — kept so /admin/audit/logs is not treated as an entry id.
Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "userId", "required": false, "in": "query", "description": "Filter logs by the user who performed the action", "schema": {"example": "550e8400-e29b-41d4-a716-446655440000", "type": "string"}}, {"name": "resourceType", "required": false, "in": "query", "description": "Filter logs by the category of system resource affected", "schema": {"example": "Project", "type": "string"}}, {"name": "action", "required": false, "in": "query", "description": "Filter logs by the specific action executed", "schema": {"example": "USER_LOGIN", "type": "string"}}, {"name": "from", "required": false, "in": "query", "description": "Start date for the audit trail report", "schema": {"example": "2023-01-01", "type": "string"}}, {"name": "to", "required": false, "in": "query", "description": "End date for the audit trail report", "schema": {"example": "2023-12-31", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Logs retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/audit/stats
Audit statistics
Get aggregate overview of audit activity.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Statistics retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/audit/user/{userId}
User audit trail
Retrieve all audit logs associated with a specific user ID.
Parameters: [{"name": "userId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "User trail retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/audit/resource/{type}/{id}
Resource audit trail
Retrieve all audit logs associated with a specific resource type and ID.
Parameters: [{"name": "type", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Resource trail retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/audit/{id}
Get audit entry
Retrieve detailed information for a specific audit log entry.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Audit entry retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/audit/export
Export audit logs
Initiate a background process to export audit logs in CSV or JSON format.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ExportAuditDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Export started", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/dashboard/overview
Get dashboard overview metrics
Fetch a snapshot of key performance indicators and system-wide overview data.
Parameters: [{"name": "period", "required": false, "in": "query", "description": "The time range for which dashboard data should be aggregated", "schema": {"example": "MONTH", "enum": ["TODAY", "WEEK", "MONTH", "QUARTER", "YEAR"], "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Dashboard overview retrieved successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/dashboard/revenue
Get revenue analytics
Retrieve comprehensive financial reports and revenue breakdown across the platform.
Parameters: [{"name": "period", "required": false, "in": "query", "description": "Predefined timeframe for revenue aggregation", "schema": {"example": "QUARTER", "enum": ["TODAY", "WEEK", "MONTH", "QUARTER", "YEAR"], "type": "string"}}, {"name": "from", "required": false, "in": "query", "description": "Custom start date for the revenue report", "schema": {"example": "2023-01-01", "type": "string"}}, {"name": "to", "required": false, "in": "query", "description": "Custom end date for the revenue report", "schema": {"example": "2023-03-31", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Revenue analytics retrieved successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/dashboard/users
Get user metrics
Fetch detailed statistics on user acquisition, retention, and status distribution.
Parameters: [{"name": "period", "required": false, "in": "query", "description": "The time range for which dashboard data should be aggregated", "schema": {"example": "MONTH", "enum": ["TODAY", "WEEK", "MONTH", "QUARTER", "YEAR"], "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "User metrics retrieved successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/dashboard/analytics/users
Get user analytics (alias of /dashboard/users)
PIPE-001: audit/app-map alias for GET dashboard/users
Parameters: [{"name": "period", "required": false, "in": "query", "description": "The time range for which dashboard data should be aggregated", "schema": {"example": "MONTH", "enum": ["TODAY", "WEEK", "MONTH", "QUARTER", "YEAR"], "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "User analytics retrieved successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/dashboard/projects
Get project metrics
Retrieve analytical data regarding project creation, status, and categories.
Parameters: [{"name": "period", "required": false, "in": "query", "description": "The time range for which dashboard data should be aggregated", "schema": {"example": "MONTH", "enum": ["TODAY", "WEEK", "MONTH", "QUARTER", "YEAR"], "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Project metrics retrieved successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/dashboard/analytics/projects
Get project analytics (alias of /dashboard/projects)
PIPE-001: audit/app-map alias for GET dashboard/projects
Parameters: [{"name": "period", "required": false, "in": "query", "description": "The time range for which dashboard data should be aggregated", "schema": {"example": "MONTH", "enum": ["TODAY", "WEEK", "MONTH", "QUARTER", "YEAR"], "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Project analytics retrieved successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/dashboard/performance
Get system performance metrics
Monitor application health, server response times, and resource usage statistics.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Performance metrics retrieved successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/dashboard/activity
Get recent activity
Fetch a historical audit trail of significant administrative and system activities.
Parameters: [{"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Recent activity retrieved successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/dashboard/alerts
Get system alerts
Retrieve high-priority issues and status warnings across the infrastructure.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Alerts retrieved successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/system/email-templates
List email templates
Fetch all available email templates in the system.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Templates retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/system/email-templates
Create or upsert email template
Upsert an email template by unique name. Safe to re-run during seeding.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateEmailTemplateDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Template upserted", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/system/email-templates/preview
Preview email template by id
Render a template with sample variables. Body: { templateId } or { id }.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Template previewed", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/system/email-templates/{id}
Get template
Retrieve the full configuration and body of a specific email template.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Template retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/system/email-templates/{id}
Update template
Modify the subject line or body content of an existing email template.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateEmailTemplateDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Template updated", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/system/email-templates/{id}/preview
Preview template
Render an email template with example data to visualize how it will appear to users.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Template previewed", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/system/email-templates/{id}/test
Send test email
Dispatch a live test email using the specified template to a target address.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Test email sent", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/users/{userId}/impersonate
Start impersonation session
Create a temporary session allowing an administrator to act on behalf of another user.
Parameters: [{"name": "userId", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ImpersonateUserDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Impersonation session started", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/users/impersonate/end
End impersonation (body sessionId)
Same as POST …/impersonate/end/:sessionId for clients that send sessionId in JSON.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Impersonation ended", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/users/impersonate/end/{sessionId}
End impersonation session
Gracefully close an active impersonation session and invalidate its tokens.
Parameters: [{"name": "sessionId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Impersonation ended", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/users/impersonate/sessions
List impersonation sessions
Fetch recent impersonation sessions (active and ended) for auditing purposes.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Sessions retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/system/config
Get system config
Fetch the current global configuration settings for the entire platform.
Security: [{"bearer": []}]
Responses: {"200": {"description": "System config retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/system/config
Update system config
Modify global system settings. These changes take effect immediately across the platform.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateSystemConfigDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "System config updated", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/system/features
List feature flags
Retrieve all feature flags and their current enablement status for the system.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Feature flags retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/system/features/{flag}
Toggle feature flag
Enable or disable a specific feature globally based on its unique identifier.
Parameters: [{"name": "flag", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ToggleFeatureDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Feature flag toggled", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/system/maintenance
Toggle maintenance mode
Put the platform into maintenance mode or bring it back online. Affects public access.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ToggleMaintenanceDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Maintenance mode toggled", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/system/cache/clear
Clear cache
Purge data from the system cache based on provided patterns or clear the entire object store.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ClearCacheDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/system/cache/clear/{key}
Clear specific cache key
Immediately invalidate and remove a specific data entry from the system cache.
Parameters: [{"name": "key", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/system/jobs
List background jobs
Retrieve a history and current status of asynchronous background processes.
Parameters: [{"name": "status", "required": false, "in": "query", "description": "Filter jobs by their current execution status", "schema": {"example": "RUNNING", "enum": ["PENDING", "RUNNING", "COMPLETED", "FAILED"], "type": "string"}}, {"name": "queue", "required": false, "in": "query", "description": "Filter jobs by the specific processing queue name", "schema": {"example": "email-notifications", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Jobs retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/system/jobs/{id}/retry
Retry failed job
Manually re-trigger a background job that previously encountered an error.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### DELETE /api/system/jobs/{id}
Cancel job
Stop a scheduled or running background job and prevent future executions.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/system/logs
View system logs
Access centralized application and infrastructure logs for debugging and auditing.
Parameters: [{"name": "level", "required": false, "in": "query", "description": "Minimum severity level to retrieve", "schema": {"example": "error", "enum": ["error", "warn", "info", "debug"], "type": "string"}}, {"name": "service", "required": false, "in": "query", "description": "Target microservice name to filter logs", "schema": {"example": "auth-service", "type": "string"}}, {"name": "from", "required": false, "in": "query", "description": "Start time for log retrieval", "schema": {"example": "2023-01-01T00:00:00Z", "type": "string"}}, {"name": "to", "required": false, "in": "query", "description": "End time for log retrieval", "schema": {"example": "2023-01-01T23:59:59Z", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Logs retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/system/logs/download
Download logs
Generate a downloadable archive of system logs matching specific criteria.
Parameters: [{"name": "level", "required": false, "in": "query", "description": "Minimum severity level to retrieve", "schema": {"example": "error", "enum": ["error", "warn", "info", "debug"], "type": "string"}}, {"name": "service", "required": false, "in": "query", "description": "Target microservice name to filter logs", "schema": {"example": "auth-service", "type": "string"}}, {"name": "from", "required": false, "in": "query", "description": "Start time for log retrieval", "schema": {"example": "2023-01-01T00:00:00Z", "type": "string"}}, {"name": "to", "required": false, "in": "query", "description": "End time for log retrieval", "schema": {"example": "2023-01-01T23:59:59Z", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Log download URL generated", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/system/announcements
Send system announcement
Publish a global notification or announcement to the user dashboard.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/SendAnnouncementDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Announcement sent", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/webhooks
List webhooks
Fetch all registered webhooks for the system.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Webhooks retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/webhooks
Create webhook
Register a new webhook endpoint to receive specified system events.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateWebhookDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Webhook created", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/webhooks/health
Webhooks health check

Security: [{"bearer": []}]
Responses: {"200": {"description": "Webhooks health", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/webhooks/events
List available webhook events
Retrieve a comprehensive registry of all platform events that can trigger a webhook notification.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Available events", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/webhooks/{id}
Get webhook
Retrieve comprehensive configuration for a specific webhook by ID.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Webhook retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/webhooks/{id}
Update webhook
Modify the URL, events, or status of an existing webhook.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateWebhookDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Webhook updated", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/webhooks/{id}
Delete webhook
Remove a webhook registration and stop all future delivery attempts.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Webhook deleted", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/webhooks/{id}/test
Test webhook
Trigger a sample event to verify the target URL is reachable and correctly configured.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/TestWebhookDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/webhooks/{id}/deliveries
Get webhook deliveries
Fetch a history of delivery attempts, status codes, and response bodies for a specific webhook.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "page", "required": false, "in": "query", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "status", "required": false, "in": "query", "description": "Filter deliveries by their execution status", "schema": {"enum": ["PENDING", "DELIVERED", "FAILED"], "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Deliveries retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/webhooks/{id}/enable
Enable webhook

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Webhook enabled", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/webhooks/{id}/disable
Disable webhook

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Webhook disabled", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/webhooks/{id}/deliveries/{deliveryId}
Get delivery details

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "deliveryId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Delivery details retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/webhooks/{id}/deliveries/{deliveryId}/retry
Retry delivery

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "deliveryId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Delivery retry initiated", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/webhooks/{id}/stats
Get webhook statistics

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Webhook stats retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/documents/verify/{documentNumber}
Verify document authenticity
Public callers must pass HMAC query `t` (printed on the PDF). Without a valid token the response is indistinguishable from not-found (closes sequential enumeration).
Parameters: [{"name": "documentNumber", "required": true, "in": "path", "description": "Document number e.g. NL-INV-2026-000042", "schema": {"type": "string"}}, {"name": "t", "required": false, "in": "query", "description": "HMAC verify token from the PDF QR / verification URL", "schema": {"type": "string"}}, {"name": "x-gateway-source", "required": true, "in": "header", "schema": {"type": "string"}}, {"name": "x-verify-detail", "required": true, "in": "header", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/documents/mine
List generated documents issued to the current user

Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": false, "in": "query", "schema": {"type": "string"}}, {"name": "latestOnly", "required": false, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/documents/mine/{documentId}/download
Download a generated document issued to the current user

Parameters: [{"name": "documentId", "required": true, "in": "path", "description": "GeneratedDocument UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/documents/users/{userId}
List generated documents issued to a user (admin)

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}, {"name": "page", "required": false, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": false, "in": "query", "schema": {"type": "string"}}, {"name": "latestOnly", "required": false, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/documents/{documentId}/download
Download a specific generated document version (admin)

Parameters: [{"name": "documentId", "required": true, "in": "path", "description": "GeneratedDocument UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/reports
List generated analytics reports

Parameters: [{"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Reports retrieved", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/reports
Generate an analytics report now (PIPE-001)

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/GenerateReportDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Report generated", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/reports/{id}/download
Download analytics report (presigned URL)

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Report export UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Report download URL generated", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "ExportAuditDto": {
      "type": "object",
      "properties": {
        "format": {
          "enum": [
            "CSV",
            "JSON"
          ],
          "type": "string",
          "description": "The target file format for the exported data",
          "example": "CSV"
        },
        "userId": {
          "type": "string",
          "description": "Filter logs by actor user UUID",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "resourceType": {
          "type": "string",
          "description": "Filter logs by resource category",
          "example": "Security"
        },
        "action": {
          "type": "string",
          "description": "Filter logs by specific system action",
          "example": "ACCOUNT_SUSPENDED"
        },
        "from": {
          "type": "string",
          "description": "Reporting range start date",
          "example": "2023-01-01"
        },
        "to": {
          "type": "string",
          "description": "Reporting range end date",
          "example": "2023-12-31"
        }
      },
      "required": [
        "format"
      ]
    },
    "CreateEmailTemplateDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 100,
          "example": "welcome",
          "description": "Unique template name"
        },
        "subject": {
          "type": "string",
          "example": "Welcome to Nestlancer!"
        },
        "body": {
          "type": "string",
          "description": "HTML or text body (may include Handlebars placeholders)"
        },
        "variables": {
          "type": "object",
          "description": "Declared template variables metadata"
        },
        "description": {
          "type": "string",
          "maxLength": 500
        }
      },
      "required": [
        "name",
        "subject",
        "body"
      ]
    },
    "UpdateEmailTemplateDto": {
      "type": "object",
      "properties": {
        "subject": {
          "type": "string",
          "description": "The subject line for the email template",
          "example": "Welcome to NestLancer!"
        },
        "body": {
          "type": "string",
          "description": "The HTML body content of the template (Handlebars supported)",
          "example": "<h1>Hello {{name}}</h1>"
        }
      }
    },
    "ImpersonateUserDto": {
      "type": "object",
      "properties": {
        "reason": {
          "type": "string",
          "maxLength": 500,
          "example": "Investigating reported UI bug in project dashboard",
          "description": "Justification for the impersonation session for auditing purposes"
        },
        "ticketId": {
          "type": "string",
          "example": "TICKET-1234",
          "description": "Optional support ticket ID associated with this request"
        },
        "durationMinutes": {
          "type": "number",
          "minimum": 1,
          "maximum": 240,
          "example": 60,
          "description": "How long the impersonation token stays valid, in minutes. Capped at the platform maximum."
        }
      },
      "required": [
        "reason"
      ]
    },
    "UpdateSystemConfigDto": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string",
          "description": "The unique configuration key to update",
          "example": "MAX_UPLOAD_SIZE"
        },
        "value": {
          "type": "object",
          "description": "JSON configuration value (string, number, boolean, or object)",
          "additionalProperties": true,
          "example": {
            "maxUploadMb": 50
          }
        },
        "description": {
          "type": "string",
          "maxLength": 500,
          "description": "Optional human-readable description"
        }
      },
      "required": [
        "key",
        "value"
      ]
    },
    "ToggleFeatureDto": {
      "type": "object",
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "Target state for the feature flag",
          "example": true
        },
        "description": {
          "type": "string",
          "maxLength": 500,
          "description": "Human-readable description of the flag"
        },
        "rolloutPercentage": {
          "type": "number",
          "minimum": 0,
          "maximum": 100,
          "description": "Rollout percentage 0\u2013100",
          "example": 100
        }
      },
      "required": [
        "enabled"
      ]
    },
    "ToggleMaintenanceDto": {
      "type": "object",
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "Enable or disable maintenance mode",
          "example": true
        },
        "message": {
          "type": "string",
          "maxLength": 500,
          "description": "Custom message displayed to users during maintenance",
          "example": "Upgrading database. Back in 10 minutes."
        },
        "estimatedEnd": {
          "type": "string",
          "maxLength": 64,
          "description": "ISO 8601 or datetime-local timestamp for expected system availability",
          "example": "2023-01-01T02:00:00.000Z"
        }
      },
      "required": [
        "enabled"
      ]
    },
    "ClearCacheDto": {
      "type": "object",
      "properties": {
        "keyPattern": {
          "type": "string",
          "description": "Glob-style pattern for cache keys to purge (leave empty for full flush)",
          "example": "user_profile_*"
        }
      }
    },
    "SendAnnouncementDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "maxLength": 200,
          "description": "Short, descriptive header for the announcement",
          "example": "Scheduled Maintenance"
        },
        "message": {
          "type": "string",
          "maxLength": 1000,
          "description": "Detailed body text of the announcement",
          "example": "The system will be offline for 15 minutes at midnight UTC."
        },
        "type": {
          "enum": [
            "INFO",
            "WARNING",
            "CRITICAL"
          ],
          "type": "string",
          "description": "The severity level determining announcement styling and behavior",
          "example": "INFO"
        },
        "dismissable": {
          "type": "boolean",
          "description": "Whether users can manually hide this announcement",
          "example": true
        },
        "scheduledFor": {
          "type": "string",
          "description": "ISO 8601 timestamp for when to start displaying this announcement",
          "example": "2023-01-01T00:00:00.000Z"
        },
        "expiresAt": {
          "type": "string",
          "description": "ISO 8601 timestamp for when to stop displaying this announcement",
          "example": "2023-01-01T23:59:59.000Z"
        }
      },
      "required": [
        "title",
        "message",
        "type"
      ]
    },
    "RetryPolicyDto": {
      "type": "object",
      "properties": {
        "maxRetries": {
          "type": "number",
          "example": 3,
          "description": "Maximum number of delivery attempts"
        },
        "backoffSeconds": {
          "type": "number",
          "example": 60,
          "description": "Seconds to wait between retry attempts"
        }
      }
    },
    "CreateWebhookDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 100,
          "example": "Project Updates",
          "description": "Friendly name for the webhook configuration"
        },
        "url": {
          "type": "string",
          "example": "https://api.example.com/webhooks/projects",
          "description": "The target URL to receive event payloads"
        },
        "events": {
          "example": [
            "project.created",
            "project.updated"
          ],
          "description": "List of system event types to subscribe to",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "headers": {
          "type": "object",
          "example": {
            "X-Custom-Header": "value"
          },
          "description": "Additional HTTP headers to include in delivery"
        },
        "secret": {
          "type": "string",
          "example": "whsec_...",
          "description": "Shared secret used to sign payloads for security verification"
        },
        "enabled": {
          "type": "boolean",
          "example": true,
          "description": "Whether the webhook is active and receiving events"
        },
        "retryPolicy": {
          "description": "Custom retry settings for this webhook",
          "allOf": [
            {
              "$ref": "#/components/schemas/RetryPolicyDto"
            }
          ]
        }
      },
      "required": [
        "name",
        "url",
        "events"
      ]
    },
    "UpdateWebhookDto": {
      "type": "object",
      "properties": {}
    },
    "TestWebhookDto": {
      "type": "object",
      "properties": {
        "event": {
          "type": "string",
          "example": "project.created",
          "description": "The event type to simulate"
        }
      },
      "required": [
        "event"
      ]
    },
    "GenerateReportDto": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "REVENUE_REPORT",
            "PROJECT_STATS",
            "USER_STATS",
            "ENGAGEMENT_METRICS",
            "OVERVIEW"
          ],
          "description": "Report type",
          "example": "REVENUE_REPORT"
        },
        "period": {
          "type": "string",
          "enum": [
            "DAILY",
            "WEEKLY",
            "MONTHLY",
            "YEARLY"
          ],
          "description": "Reporting period",
          "example": "WEEKLY"
        },
        "format": {
          "type": "string",
          "enum": [
            "PDF",
            "CSV"
          ],
          "description": "Export format",
          "example": "PDF"
        }
      }
    }
  }
}

## payments.openapi

None

### GET /api/v1/payments/methods
List saved payment methods
Access your vault of registered credit cards and digital payment instruments.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/payments/methods
Add a new payment method
Adds a new payment method for the authenticated user.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/AddPaymentMethodDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "Payment method added successfully"}}

### DELETE /api/v1/payments/methods/{id}
Remove a payment method
Removes a saved payment method.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/payments/methods/{id}/default
Set a payment method as default
Sets a specific payment method as the default for future transactions.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/payments/methods/{id}/nickname
Update payment method nickname
Updates the user-friendly nickname for a payment method.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/payments/health
Payments service health check
Confirm that the payments microservice is reachable and operational.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/payments/platform-accounts
List active platform bank/UPI accounts for offline payment

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/payments/bank-transfer/submit
Submit offline bank/UPI transfer with receipt proof

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/SubmitBankTransferDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "Transfer submitted for verification"}}

### POST /api/v1/payments/create-intent
Create a payment intent
Initialize a transaction with the payment provider to obtain a client secret.
Parameters: [{"name": "idempotency-key", "required": true, "in": "header", "schema": {"type": "string"}}, {"name": "x-idempotency-key", "required": true, "in": "header", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreatePaymentIntentDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "Payment intent created successfully"}}

### POST /api/v1/payments/initiate
Initiate a payment

Parameters: [{"name": "idempotency-key", "required": true, "in": "header", "schema": {"type": "string"}}, {"name": "x-idempotency-key", "required": true, "in": "header", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreatePaymentIntentDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "Payment initiation successful"}}

### POST /api/v1/payments/confirm
Confirm a payment

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ConfirmPaymentDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/payments
List user payments

Parameters: [{"name": "status", "required": false, "in": "query", "description": "Filter payments by status. PENDING = due/payable open rows; NOT_DUE = open rows not yet payable.", "schema": {"enum": ["CREATED", "PENDING", "PROCESSING", "PENDING_VERIFICATION", "COMPLETED", "FAILED", "REFUNDED", "DISPUTED", "CANCELLED", "NOT_DUE"], "type": "string"}}, {"name": "projectId", "required": false, "in": "query", "description": "Filter payments by project ID", "schema": {"type": "string"}}, {"name": "clientId", "required": false, "in": "query", "description": "Filter payments by client user ID", "schema": {"type": "string"}}, {"name": "page", "required": false, "in": "query", "description": "Page number for pagination", "schema": {"minimum": 1, "default": 1, "example": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "description": "Number of items per page", "schema": {"minimum": 1, "default": 20, "example": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias for limit (cross-service pagination)", "schema": {"minimum": 1, "example": 20, "type": "number"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/payments/projects/{projectId}
Get project payments

Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/payments/projects/{projectId}/milestones
Get payment milestones for project

Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/payments/stats
Get user payment statistics

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/payments/{id}/status
Check payment status

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/payments/{id}
Get payment details

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/payments/{id}/receipt
Download payment receipt

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/payments/{id}/invoice
Download payment invoice

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/payments/{id}/dispute
File a payment dispute

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/payments/{id}/cancel
Cancel a pending payment

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/invoices
List user invoices
Access your global repository of financial invoices for billing and tax purposes.
Parameters: [{"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/invoices/{id}
Get invoice details
Retrieves full details for a specific invoice.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/invoices/{id}/download
Download invoice PDF
Generates and returns a download link for an invoice PDF.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/payments/{id}/documents/versions
List payment document versions

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Payment UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/disputes
List payment disputes
Access the global repository of payment disputes for administrative review and resolution.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/disputes/{id}
Get dispute details
Retrieves full details for a specific payment dispute.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/payments/disputes/{id}
Update a dispute
Updates an existing dispute record.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/payments/disputes/{id}/resolve
Resolve a dispute
Emit an administrative decision to close an active payment dispute.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/payments/disputes/{id}/respond
Respond to a dispute
Submits an official response to a dispute (e.g., from the studio or platform).
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/payments/reconcile
Reconcile payments with Razorpay
Initiates a manual reconciliation process with the payment provider.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/milestones/{id}/payments
List payments for a milestone
Monitor transaction distribution and status for a specific contractual milestone.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/milestones/{id}/mark-complete
Mark milestone as complete (deprecated)
Use POST /admin/milestones/:id/complete (progress) instead. This endpoint only remains for legacy callers.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/milestones/{id}/request-payment
Request payment for milestone
Triggers a payment request for a specific milestone by emitting an outbox event.
A downstream worker/notification service picks this up and notifies the client.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/accounts
List platform payment accounts (bank/UPI)

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/payments/accounts
Create a platform payment account

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreatePlatformPaymentAccountDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### PATCH /api/v1/admin/payments/accounts/{id}
Update a platform payment account

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdatePlatformPaymentAccountDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/payments/accounts/{id}
Disable a platform payment account (soft delete)

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/company-legal
List company legal profiles (GSTIN/PAN/address for PDFs)

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/payments/company-legal
Create a company legal profile

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateCompanyLegalProfileDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### PATCH /api/v1/admin/payments/company-legal/{id}
Update a company legal profile

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateCompanyLegalProfileDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/payments/company-legal/{id}
Remove a company legal profile

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments
List all payments (Admin)
Access the global repository of payment records for administrative audit and reconciliation.
Parameters: [{"name": "status", "required": false, "in": "query", "description": "Filter payments by status. PENDING = due/payable open rows; NOT_DUE = open rows not yet payable.", "schema": {"enum": ["CREATED", "PENDING", "PROCESSING", "PENDING_VERIFICATION", "COMPLETED", "FAILED", "REFUNDED", "DISPUTED", "CANCELLED", "NOT_DUE"], "type": "string"}}, {"name": "projectId", "required": false, "in": "query", "description": "Filter payments by project ID", "schema": {"type": "string"}}, {"name": "clientId", "required": false, "in": "query", "description": "Filter payments by client user ID", "schema": {"type": "string"}}, {"name": "page", "required": false, "in": "query", "description": "Page number for pagination", "schema": {"minimum": 1, "default": 1, "example": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "description": "Number of items per page", "schema": {"minimum": 1, "default": 20, "example": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias for limit (cross-service pagination)", "schema": {"minimum": 1, "example": 20, "type": "number"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/stats
Get payment statistics
Monitor high-level transaction volume, success rates, and total volume platform-wide.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/summary
Get payment summary (alias for stats)
Back-compat alias used by admin dashboards and external audits.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/reconciliation
Get payment reconciliation data
Retrieves a read-only reconciliation report (payments with external IDs for audit).
Query params: startDate, endDate (ISO), page, limit.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/milestones
List all payment milestones
Lists all payment milestones, optionally filtered by project.
Parameters: [{"name": "projectId", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/milestones/{id}
Get milestone details
Retrieves details for a specific payment milestone.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/payments/milestones/{id}
Update milestone payment fields
Updates the payment-related fields of a milestone (amount, currency, dueDate, status).
The POST /admin/payments/projects/:projectId/milestones endpoint was removed — use
POST /admin/projects/:projectId/milestones (projects service) instead.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/revenue/report
Get revenue report
Generates a revenue report for a specified period and grouping.
Parameters: [{"name": "from", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "to", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "groupBy", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/revenue/export
Export revenue data
Exports revenue data in the specified format (CSV/JSON).
Parameters: [{"name": "from", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "to", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "format", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/{id}/documents/versions
List payment document versions (admin)
Lists invoice and receipt PDF versions for a payment (admin).
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/{id}/receipt
Download payment receipt PDF (admin)
Generates and returns a download URL for a payment receipt PDF.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/{id}/invoice
Download payment invoice PDF (admin)
Generates an invoice PDF download URL for administrative review.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/{id}
Get payment details (Admin)
Retrieves full payment details for administrative review.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/payments/{id}/refund
Process a refund
Processes a refund for a transaction.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ProcessRefundDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/payments/{id}/cancel
Cancel a pending client payment intent (admin)
Verifies a payment against the gateway (or confirms it is already completed).
Does not mark CREATED schedule rows as paid — use manual payment for offline funds.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/payments/{id}/verify
Verify a payment

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/payments/projects/{projectId}/reconcile-state
Reconcile milestone/progress state from completed payments

Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/payments/manual
Create manual payment entry
Manually creates a payment entry in the system.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateManualPaymentDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "Manual payment created successfully"}}

### POST /api/v1/admin/payments/{id}/manual-payment
Record manual payment by payment id (audit alias)
Audit/runbook alias for `POST /admin/payments/{id}/manual-payment`.
Resolves project/milestone from the payment row and marks it complete.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/payments/milestones/{id}/release
Confirm manual milestone payment (offline)
For bank-transfer or manual entries only. Online Razorpay payments use confirm/webhook.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/{id}/transactions
Get transaction history for a payment
Retrieves individual transactions related to a specific payment.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/{id}/timeline
Get payment timeline
Retrieves the audit timeline (events) for a specific payment.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/payments/methods/supported
Get supported payment methods
Retrieves the list of currently supported payment methods.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/payments/{id}/approve-transfer
Approve offline bank/UPI transfer
Approves a client-submitted offline bank/UPI transfer.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ApproveTransferDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/payments/{id}/reject-transfer
Reject offline bank/UPI transfer
Rejects a client-submitted offline bank/UPI transfer.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RejectTransferDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/payments/settings
Update payment settings
Updates global payment configuration settings.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/webhooks/razorpay
Handle Razorpay Webhook
Securely process external payment status updates and events from the Razorpay provider.
Parameters: [{"name": "x-razorpay-signature", "required": true, "in": "header", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "AddPaymentMethodDto": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "card",
            "upi",
            "netbanking",
            "wallet"
          ],
          "description": "The type of payment method being added"
        },
        "tokenId": {
          "type": "string",
          "example": "tok_visa",
          "description": "Provider-specific token representing the saved payment method"
        },
        "last4": {
          "type": "string",
          "example": "4242",
          "description": "Last 4 digits of the card (for identification)"
        },
        "cardBrand": {
          "type": "string",
          "example": "visa",
          "description": "The card network brand (e.g., visa, mastercard)"
        },
        "cardExpMonth": {
          "type": "number",
          "minimum": 1,
          "maximum": 12,
          "example": 12,
          "description": "Card expiration month (1-12)"
        },
        "cardExpYear": {
          "type": "number",
          "minimum": 2024,
          "maximum": 2050,
          "example": 2028,
          "description": "Card expiration year"
        },
        "upiVpa": {
          "type": "string",
          "example": "user@okaxis",
          "description": "UPI VPA handle (for UPI payments)"
        },
        "bankName": {
          "type": "string",
          "example": "HDFC Bank",
          "description": "Name of the bank (for netbanking)"
        },
        "walletProvider": {
          "type": "string",
          "example": "paytm",
          "description": "The wallet service provider (e.g., paytm, phonepe)"
        },
        "nickname": {
          "type": "string",
          "example": "My Personal Visa",
          "description": "User-defined friendly name for this payment method"
        },
        "setAsDefault": {
          "type": "boolean",
          "example": true,
          "description": "Whether to set this method as the default for future payments"
        }
      },
      "required": [
        "type"
      ]
    },
    "SubmitBankTransferDto": {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string"
        },
        "milestoneId": {
          "type": "string"
        },
        "amount": {
          "type": "number",
          "minimum": 1,
          "description": "Amount in paise"
        },
        "platformAccountId": {
          "type": "string",
          "description": "Platform settlement account used for the transfer"
        },
        "transferReference": {
          "type": "string",
          "maxLength": 80,
          "description": "UTR / UPI transaction reference"
        },
        "transferPaidAt": {
          "type": "string",
          "description": "Client-claimed transfer time (ISO)"
        },
        "mediaIds": {
          "description": "Media IDs of uploaded transfer proofs (image/PDF)",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "notes": {
          "type": "string",
          "maxLength": 1000
        }
      },
      "required": [
        "projectId",
        "milestoneId",
        "amount",
        "platformAccountId",
        "transferReference",
        "mediaIds"
      ]
    },
    "CreatePaymentIntentDto": {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174000",
          "description": "The unique ID of the project"
        },
        "milestoneId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174001",
          "description": "The unique ID of the milestone (if applicable)"
        },
        "amount": {
          "type": "number",
          "minimum": 100,
          "maximum": 100000000,
          "example": 5000,
          "description": "The amount to be paid (in the smallest currency unit, e.g., paise for INR)"
        },
        "currency": {
          "type": "string",
          "default": "INR",
          "maxLength": 3,
          "example": "INR",
          "description": "The currency code (ISO 4217)"
        },
        "paymentMethodId": {
          "type": "string",
          "example": "pm_123...",
          "description": "ID of a saved payment method to use"
        }
      },
      "required": [
        "projectId",
        "amount"
      ]
    },
    "ConfirmPaymentDto": {
      "type": "object",
      "properties": {
        "paymentIntentId": {
          "type": "string",
          "example": "order_987abc",
          "description": "The payment intent or order ID from the payment provider"
        },
        "externalPaymentId": {
          "type": "string",
          "example": "pay_123xyz",
          "description": "The external transaction ID from the payment provider"
        },
        "signature": {
          "type": "string",
          "example": "sig_abc123...",
          "description": "Security signature for payment verification"
        }
      },
      "required": [
        "paymentIntentId",
        "externalPaymentId",
        "signature"
      ]
    },
    "CreatePlatformPaymentAccountDto": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "maxLength": 120,
          "example": "HDFC Current \u2014 Nestlancer"
        },
        "accountName": {
          "type": "string",
          "description": "Deprecated alias for `label`",
          "maxLength": 120,
          "deprecated": true,
          "example": "HDFC Current \u2014 Nestlancer"
        },
        "type": {
          "type": "string",
          "enum": [
            "BANK",
            "UPI",
            "BOTH"
          ]
        },
        "accountHolderName": {
          "type": "string",
          "maxLength": 200,
          "example": "Nestlancer Pvt Ltd"
        },
        "bankName": {
          "type": "string",
          "maxLength": 120,
          "example": "HDFC Bank"
        },
        "accountNumber": {
          "type": "string",
          "maxLength": 40,
          "example": "50200012345678"
        },
        "ifsc": {
          "type": "string",
          "maxLength": 20,
          "example": "HDFC0001234"
        },
        "accountType": {
          "type": "string",
          "maxLength": 40,
          "example": "current"
        },
        "upiVpa": {
          "type": "string",
          "maxLength": 120,
          "example": "nestlancer@hdfcbank"
        },
        "instructions": {
          "type": "string",
          "maxLength": 1000
        },
        "currency": {
          "type": "string",
          "maxLength": 3,
          "default": "INR"
        },
        "isActive": {
          "type": "boolean",
          "default": true
        },
        "isPrimary": {
          "type": "boolean",
          "default": false
        },
        "isDefault": {
          "type": "boolean",
          "description": "Deprecated alias for `isPrimary`",
          "deprecated": true
        },
        "sortOrder": {
          "type": "number",
          "minimum": 0,
          "default": 0
        }
      },
      "required": [
        "label",
        "type"
      ]
    },
    "UpdatePlatformPaymentAccountDto": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "maxLength": 120
        },
        "type": {
          "type": "string",
          "enum": [
            "BANK",
            "UPI",
            "BOTH"
          ]
        },
        "accountHolderName": {
          "type": "string",
          "maxLength": 200
        },
        "bankName": {
          "type": "string",
          "maxLength": 120
        },
        "accountNumber": {
          "type": "string",
          "maxLength": 40
        },
        "ifsc": {
          "type": "string",
          "maxLength": 20
        },
        "accountType": {
          "type": "string",
          "maxLength": 40
        },
        "upiVpa": {
          "type": "string",
          "maxLength": 120
        },
        "instructions": {
          "type": "string",
          "maxLength": 1000
        },
        "currency": {
          "type": "string",
          "maxLength": 3
        },
        "isActive": {
          "type": "boolean"
        },
        "isPrimary": {
          "type": "boolean"
        },
        "isDefault": {
          "type": "boolean",
          "description": "Deprecated alias for `isPrimary`",
          "deprecated": true
        },
        "sortOrder": {
          "type": "number",
          "minimum": 0
        }
      }
    },
    "CreateCompanyLegalProfileDto": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "maxLength": 120,
          "example": "Primary legal entity"
        },
        "legalName": {
          "type": "string",
          "maxLength": 200,
          "example": "Nestlancer Pvt Ltd"
        },
        "tradeName": {
          "type": "string",
          "maxLength": 200,
          "example": "Nestlancer"
        },
        "address": {
          "type": "string",
          "maxLength": 500,
          "example": "123 MG Road, Bengaluru, Karnataka 560001"
        },
        "state": {
          "type": "string",
          "maxLength": 80,
          "example": "Karnataka"
        },
        "stateCode": {
          "type": "string",
          "maxLength": 8,
          "example": "29"
        },
        "gstin": {
          "type": "string",
          "example": "29AABCT1332L1ZV"
        },
        "pan": {
          "type": "string",
          "example": "AABCT1332L"
        },
        "cin": {
          "type": "string",
          "maxLength": 40,
          "example": "U72900KA2020PTC123456"
        },
        "email": {
          "type": "string",
          "maxLength": 200,
          "example": "billing@nestlancer.com"
        },
        "phone": {
          "type": "string",
          "maxLength": 40,
          "example": "+91 80 1234 5678"
        },
        "website": {
          "type": "string",
          "maxLength": 200,
          "example": "https://nestlancer.com"
        },
        "isActive": {
          "type": "boolean",
          "default": true
        },
        "isPrimary": {
          "type": "boolean",
          "default": false
        },
        "sortOrder": {
          "type": "number",
          "minimum": 0,
          "default": 0
        }
      },
      "required": [
        "label"
      ]
    },
    "UpdateCompanyLegalProfileDto": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "maxLength": 120
        },
        "legalName": {
          "type": "string",
          "nullable": true,
          "maxLength": 200
        },
        "tradeName": {
          "type": "string",
          "nullable": true,
          "maxLength": 200
        },
        "address": {
          "type": "string",
          "nullable": true,
          "maxLength": 500
        },
        "state": {
          "type": "string",
          "nullable": true,
          "maxLength": 80
        },
        "stateCode": {
          "type": "string",
          "nullable": true,
          "maxLength": 8
        },
        "gstin": {
          "type": "object"
        },
        "pan": {
          "type": "object"
        },
        "cin": {
          "type": "string",
          "nullable": true,
          "maxLength": 40
        },
        "email": {
          "type": "string",
          "nullable": true,
          "maxLength": 200
        },
        "phone": {
          "type": "string",
          "nullable": true,
          "maxLength": 40
        },
        "website": {
          "type": "string",
          "nullable": true,
          "maxLength": 200
        },
        "isActive": {
          "type": "boolean"
        },
        "isPrimary": {
          "type": "boolean"
        },
        "sortOrder": {
          "type": "number",
          "minimum": 0
        }
      }
    },
    "ProcessRefundDto": {
      "type": "object",
      "properties": {
        "amount": {
          "type": "number",
          "minimum": 1,
          "example": 500000,
          "description": "Optional partial refund amount in the same unit as Payment.amount (paise for INR). If omitted, full refund is processed."
        },
        "reason": {
          "type": "string",
          "maxLength": 500,
          "example": "Project cancelled",
          "description": "Reason for the refund. Required for offline/manual/bank payments that have no Razorpay external id."
        }
      }
    },
    "CreateManualPaymentDto": {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174000",
          "description": "Project UUID"
        },
        "milestoneId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174001",
          "description": "Milestone UUID"
        },
        "amount": {
          "type": "number",
          "maximum": 100000000,
          "minimum": 1,
          "example": 3000000,
          "description": "Amount in paise (>= 1). When omitted, the billable milestone schedule amount is used. Never omit for zero-amount / delivery-only milestones."
        },
        "currency": {
          "type": "string",
          "default": "INR",
          "maxLength": 3,
          "example": "INR",
          "description": "Currency code (ISO 4217)"
        },
        "clientId": {
          "type": "string",
          "description": "Optional client id \u2014 must match the project owner when provided"
        },
        "notes": {
          "type": "string",
          "maxLength": 2000,
          "description": "Admin notes / UTR reference"
        },
        "reference": {
          "type": "string",
          "description": "Deprecated alias for `notes`",
          "maxLength": 2000,
          "deprecated": true
        },
        "method": {
          "type": "string",
          "description": "Ignored \u2014 manual payments always use method=manual",
          "maxLength": 32,
          "example": "manual"
        },
        "paidAt": {
          "type": "string",
          "description": "Optional paid-at timestamp (ISO 8601). Defaults to now.",
          "example": "2026-09-19T12:00:00.000Z"
        },
        "invoiceNumber": {
          "type": "string",
          "maxLength": 64,
          "description": "Optional invoice number override"
        }
      },
      "required": [
        "projectId",
        "milestoneId"
      ]
    },
    "ApproveTransferDto": {
      "type": "object",
      "properties": {
        "verificationNotes": {
          "type": "string",
          "maxLength": 2000,
          "description": "Internal verification notes"
        }
      }
    },
    "RejectTransferDto": {
      "type": "object",
      "properties": {
        "reason": {
          "type": "string",
          "maxLength": 2000,
          "description": "Reason shown to the client"
        },
        "allowRetry": {
          "type": "boolean",
          "description": "If true, reset payment to CREATED so the client can retry (default true)",
          "default": true
        }
      },
      "required": [
        "reason"
      ]
    }
  }
}

## portfolio.openapi

None

### GET /api/v1/portfolio
List published portfolio items
Fetch all portfolio entries that are marked as published.
Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "categoryId", "required": false, "in": "query", "description": "Filter by category ID", "schema": {"example": "123e4567-e89b-12d3-a456-426614174000", "type": "string"}}, {"name": "tag", "required": false, "in": "query", "description": "Filter by a specific tag", "schema": {"example": "React", "type": "string"}}, {"name": "featured", "required": false, "in": "query", "description": "Filter only featured items", "schema": {"example": true, "type": "boolean"}}]
Security: []
Responses: {"200": {"description": "PortfolioItemResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "array", "items": {"$ref": "#/components/schemas/PortfolioItemResponseDto"}}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/portfolio/featured
Get featured portfolio items
Retrieve high-priority portfolio entries intended for the main showcase.
Security: []
Responses: {"200": {"description": "PortfolioItemResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "array", "items": {"$ref": "#/components/schemas/PortfolioItemResponseDto"}}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/portfolio/categories
Get all categories
Fetch a complete list of active categories used to classify portfolio projects.
Security: []
Responses: {"200": {"description": "CategoryResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "array", "items": {"$ref": "#/components/schemas/CategoryResponseDto"}}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/portfolio/tags
Get all unique tags
Extract a unique set of all technological and thematic tags used in published items.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/portfolio/search
Search portfolio items
Perform keyword-based search across the entire public portfolio.
Parameters: [{"name": "q", "required": true, "in": "query", "description": "Search keywords", "schema": {"minLength": 2, "pattern": "/^[^\\u0000-\\u001F\\u007F]+$/", "example": "E-commerce", "type": "string"}}, {"name": "categoryId", "required": false, "in": "query", "description": "Limit search to a category", "schema": {"example": "123e4567-e89b-12d3-a456-426614174000", "type": "string"}}]
Security: []
Responses: {"200": {"description": "PortfolioItemResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "array", "items": {"$ref": "#/components/schemas/PortfolioItemResponseDto"}}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/portfolio/health
Service health check
Confirm the availability and health of the portfolio microservice.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/portfolio/timeline
Portfolio project timeline
Chronological list of published projects with minimal fields for timeline UIs.
Security: []
Responses: {"200": {"description": "PortfolioTimelineItemDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "array", "items": {"$ref": "#/components/schemas/PortfolioTimelineItemDto"}}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/portfolio/{idOrSlug}
Get portfolio item details
Retrieves detailed information for a specific portfolio item by ID or slug.
Parameters: [{"name": "idOrSlug", "required": true, "in": "path", "description": "Item UUID or URL slug", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "PortfolioItemResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/PortfolioItemResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/portfolio/{idOrSlug}/view
Record portfolio item view
Records a view for analytics (debounced per viewer IP).
Parameters: [{"name": "idOrSlug", "required": true, "in": "path", "description": "Item UUID or URL slug", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### POST /api/v1/portfolio/{idOrSlug}/like
Toggle like on portfolio item
Toggles a like on a portfolio item (authenticated user or anonymous IP session).
Parameters: [{"name": "idOrSlug", "required": true, "in": "path", "description": "Item UUID or URL slug", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### GET /api/v1/admin/portfolio/categories
List all categories
Retrieve the complete registry of categories used across the portfolio system.
Security: [{"bearer": []}]
Responses: {"200": {"description": "CategoryResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "array", "items": {"$ref": "#/components/schemas/CategoryResponseDto"}}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/portfolio/categories
Create category
Define and save a new organizational category for portfolio entries.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateCategoryDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "CategoryResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/CategoryResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### PATCH /api/v1/admin/portfolio/categories/{id}
Update category
Apply changes to the metadata or display properties of a category.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Category UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateCategoryDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "CategoryResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/CategoryResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/portfolio/categories/{id}
Delete category
Remove a classification category and handle legacy item associations.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Category UUID", "schema": {"type": "string"}}, {"name": "reassignToId", "required": false, "in": "query", "description": "Target category ID for existing items", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Category successfully deleted", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/portfolio
List all portfolio items
Retrieve a global view of all portfolio entries for administrative management.
Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "status", "required": false, "in": "query", "schema": {"enum": ["DRAFT", "PUBLISHED", "ARCHIVED"], "type": "string"}}, {"name": "categoryId", "required": false, "in": "query", "schema": {"type": "string"}}, {"name": "featured", "required": false, "in": "query", "schema": {"type": "boolean"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "PortfolioItemResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "array", "items": {"$ref": "#/components/schemas/PortfolioItemResponseDto"}}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/portfolio
Create portfolio item
Initialize and save a new entry in the portfolio repository.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreatePortfolioItemDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "PortfolioItemResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/PortfolioItemResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/portfolio/reorder
Reorder portfolio items
Update the global sorting order of portfolio items for the showcase UI.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ReorderPortfolioDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/portfolio/bulk-update
Bulk update portfolio items
Performs bulk operations (publish, archive, etc.) on multiple items.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/BulkUpdatePortfolioDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/portfolio/analytics
Get global analytics
Fetch system-wide statistics on views, likes, and engagement trends.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/portfolio/analytics/{id}
Get item analytics
Access detailed engagement history and view counts for a specific entry.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/portfolio/{id}
Get portfolio item
Retrieve detailed metadata and content for any portfolio entry.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "PortfolioItemResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/PortfolioItemResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/portfolio/{id}
Update portfolio item
Apply changes to the metadata, description, or media associations of an item.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdatePortfolioItemDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "PortfolioItemResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/PortfolioItemResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/portfolio/{id}
Delete portfolio item
Deactivate and mark an entry for removal from the public repository.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/portfolio/{id}/publish
Publish item
Makes a portfolio item publicly visible.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/portfolio/{id}/unpublish
Unpublish item
Hides a published portfolio item.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/portfolio/{id}/archive
Archive item
Archives a portfolio item (moves it out of active list).
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/portfolio/{id}/toggle-featured
Toggle featured status
Toggles whether the item is highlighted on the user's profile.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/portfolio/{id}/privacy
Update privacy settings
Updates the specific visibility level (Public, Unlisted, Private).
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdatePrivacyDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/portfolio/{id}/duplicate
Duplicate item
Creates a copy of an existing portfolio item.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "PortfolioItemResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/PortfolioItemResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/portfolio/{id}/media
List portfolio preview media
Lists preview media (images, videos, documents) for admin editor.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/portfolio/{id}/media
Add media assets
Associates an existing media asset with the portfolio item.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/AddMediaDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "Media added successfully"}}

### POST /api/v1/admin/portfolio/{id}/media/upload
Upload portfolio preview media
Upload a preview file (image, video, or document) for the showcase.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}, {"name": "title", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "setAsThumbnail", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "setAsFeaturedVideo", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### DELETE /api/v1/admin/portfolio/{id}/media/{mediaId}
Remove media asset
Removes a specific media asset association.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}, {"name": "mediaId", "required": true, "in": "path", "description": "Media UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/portfolio/{id}/media/{mediaId}/thumbnail
Set portfolio thumbnail image

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "mediaId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/portfolio/{id}/media/{mediaId}/featured-video
Set featured showcase video

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "mediaId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/portfolio/{id}/media/reorder
Reorder media assets
Updates the display order of media assets within the item.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Portfolio item UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "CategoryResponseDto": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174000",
          "description": "Unique category ID"
        },
        "name": {
          "type": "string",
          "example": "Web Development",
          "description": "Display name"
        },
        "slug": {
          "type": "string",
          "example": "web-development",
          "description": "URL-friendly slug"
        },
        "description": {
          "type": "string",
          "example": "Web projects",
          "description": "Description"
        },
        "itemCount": {
          "type": "number",
          "example": 10,
          "description": "Number of portfolio items in this category"
        },
        "order": {
          "type": "number",
          "example": 1,
          "description": "Display order"
        }
      },
      "required": [
        "id",
        "name",
        "slug",
        "itemCount",
        "order"
      ]
    },
    "ClientTestimonialDto": {
      "type": "object",
      "properties": {
        "quote": {
          "type": "string",
          "maxLength": 1000,
          "example": "They delivered on time and exceeded expectations."
        },
        "author": {
          "type": "string",
          "maxLength": 100,
          "example": "Jane Doe"
        },
        "role": {
          "type": "string",
          "maxLength": 100,
          "example": "CEO, Acme Corp"
        },
        "rating": {
          "type": "number",
          "minimum": 1,
          "maximum": 5,
          "example": 5,
          "description": "Star rating from 1 to 5"
        },
        "enabled": {
          "type": "boolean",
          "example": true,
          "description": "When false, review is stored but hidden on the public showcase"
        }
      }
    },
    "ClientDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 100,
          "example": "Acme Corp",
          "description": "Name of the client"
        },
        "logoId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174001",
          "description": "Media ID for the client logo"
        },
        "industry": {
          "type": "string",
          "maxLength": 100,
          "example": "E-commerce",
          "description": "Client industry"
        },
        "website": {
          "type": "string",
          "maxLength": 200,
          "example": "https://acme.com",
          "description": "Client website"
        },
        "testimonial": {
          "$ref": "#/components/schemas/ClientTestimonialDto"
        }
      },
      "required": [
        "name"
      ]
    },
    "ProjectDetailsDto": {
      "type": "object",
      "properties": {
        "duration": {
          "type": "string",
          "maxLength": 100,
          "example": "3 months",
          "description": "Duration of the project"
        },
        "completedAt": {
          "type": "string",
          "example": "2023-12-01",
          "description": "Completion date (human-readable or ISO)"
        },
        "technologies": {
          "example": [
            "React",
            "Node.js"
          ],
          "description": "Technologies used in the project",
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "LinksDto": {
      "type": "object",
      "properties": {
        "live": {
          "type": "string",
          "example": "https://acme.com",
          "description": "Live project URL"
        },
        "github": {
          "type": "string",
          "example": "https://github.com/acme/project",
          "description": "Source code repository URL"
        }
      }
    },
    "SeoDto": {
      "type": "object",
      "properties": {
        "metaTitle": {
          "type": "string",
          "maxLength": 100,
          "example": "Portfolio | Acme Project",
          "description": "Meta title tag"
        },
        "metaDescription": {
          "type": "string",
          "maxLength": 200,
          "example": "Detailed view of the Acme project...",
          "description": "Meta description tag"
        },
        "ogImageId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174002",
          "description": "Media ID for Open Graph image"
        }
      }
    },
    "PortfolioItemResponseDto": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174000",
          "description": "Unique portfolio item ID"
        },
        "title": {
          "type": "string",
          "example": "Modern E-commerce Platform",
          "description": "Project title"
        },
        "slug": {
          "type": "string",
          "example": "modern-ecommerce-platform",
          "description": "URL-friendly slug"
        },
        "shortDescription": {
          "type": "string",
          "example": "A brief overview of the project",
          "description": "Short summary"
        },
        "fullDescription": {
          "type": "string",
          "example": "Detailed description with markdown...",
          "description": "Full project content"
        },
        "contentFormat": {
          "type": "string",
          "example": "MARKDOWN",
          "description": "Format of the full description (MARKDOWN, HTML)"
        },
        "category": {
          "description": "Associated category",
          "allOf": [
            {
              "$ref": "#/components/schemas/CategoryResponseDto"
            }
          ]
        },
        "tags": {
          "example": [
            "React",
            "NestJS"
          ],
          "description": "List of tags",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "thumbnailId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174001",
          "description": "Media ID for thumbnail"
        },
        "thumbnailUrl": {
          "type": "string",
          "example": "https://cdn.example.com/image.jpg",
          "description": "Resolved thumbnail URL"
        },
        "imageIds": {
          "example": [
            "123",
            "456"
          ],
          "description": "List of additional image IDs",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "videoUrl": {
          "type": "string",
          "example": "https://youtube.com/watch?v=...",
          "description": "URL to video content"
        },
        "client": {
          "description": "Client information",
          "allOf": [
            {
              "$ref": "#/components/schemas/ClientDto"
            }
          ]
        },
        "projectDetails": {
          "description": "Technical project details",
          "allOf": [
            {
              "$ref": "#/components/schemas/ProjectDetailsDto"
            }
          ]
        },
        "links": {
          "description": "External links",
          "allOf": [
            {
              "$ref": "#/components/schemas/LinksDto"
            }
          ]
        },
        "seo": {
          "description": "SEO metadata",
          "allOf": [
            {
              "$ref": "#/components/schemas/SeoDto"
            }
          ]
        },
        "status": {
          "type": "string",
          "example": "PUBLISHED",
          "description": "Visibility status"
        },
        "featured": {
          "type": "boolean",
          "example": true,
          "description": "Whether highlighted on profile"
        },
        "order": {
          "type": "number",
          "example": 1,
          "description": "Display order"
        },
        "likeCount": {
          "type": "number",
          "example": 124,
          "description": "Total likes"
        },
        "viewCount": {
          "type": "number",
          "example": 5000,
          "description": "Total views"
        },
        "publishedAt": {
          "format": "date-time",
          "type": "string",
          "example": "2024-03-08T12:00:00Z",
          "description": "Timestamp when published"
        },
        "completedAt": {
          "format": "date-time",
          "type": "string",
          "example": "2024-02-28T12:00:00Z",
          "description": "When the project was completed"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string",
          "example": "2024-03-08T12:00:00Z",
          "description": "Timestamp of creation"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string",
          "example": "2024-03-08T12:00:00Z",
          "description": "Timestamp of last update"
        },
        "sourceProjectId": {
          "type": "string",
          "description": "Source delivery project ID (admin only \u2014 never exposed on public routes)"
        }
      },
      "required": [
        "id",
        "title",
        "slug",
        "shortDescription",
        "fullDescription",
        "contentFormat",
        "tags",
        "imageIds",
        "status",
        "featured",
        "order",
        "likeCount",
        "viewCount",
        "createdAt",
        "updatedAt"
      ]
    },
    "PortfolioTimelineItemDto": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174000"
        },
        "title": {
          "type": "string",
          "example": "Brand identity \u2014 Acme Co."
        },
        "slug": {
          "type": "string",
          "example": "brand-identity-acme"
        },
        "publishedAt": {
          "format": "date-time",
          "type": "string",
          "nullable": true,
          "example": "2024-03-08T12:00:00.000Z"
        },
        "completedAt": {
          "format": "date-time",
          "type": "string",
          "nullable": true,
          "example": "2024-02-15T12:00:00.000Z"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string",
          "example": "2024-01-10T12:00:00.000Z"
        }
      },
      "required": [
        "id",
        "title",
        "slug",
        "createdAt"
      ]
    },
    "CreateCategoryDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 100,
          "example": "Web Development",
          "description": "Display name of the category"
        },
        "slug": {
          "type": "string",
          "pattern": "/^[a-z0-9-]+$/",
          "example": "web-development",
          "description": "URL-friendly slug (auto-generated if not provided)"
        },
        "description": {
          "type": "string",
          "maxLength": 500,
          "example": "Projects related to web applications and sites",
          "description": "Detailed description of the category"
        },
        "order": {
          "type": "number",
          "example": 1,
          "description": "Display order for sorting"
        }
      },
      "required": [
        "name"
      ]
    },
    "UpdateCategoryDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 100,
          "example": "Web Development",
          "description": "Display name of the category"
        },
        "slug": {
          "type": "string",
          "pattern": "/^[a-z0-9-]+$/",
          "example": "web-development",
          "description": "URL-friendly slug (auto-generated if not provided)"
        },
        "description": {
          "type": "string",
          "maxLength": 500,
          "example": "Projects related to web applications and sites",
          "description": "Detailed description of the category"
        },
        "order": {
          "type": "number",
          "example": 1,
          "description": "Display order for sorting"
        }
      }
    },
    "CreatePortfolioItemDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "maxLength": 200,
          "example": "Modern E-commerce Platform",
          "description": "The title of the portfolio item"
        },
        "slug": {
          "type": "string",
          "pattern": "/^[a-z0-9-]+$/",
          "example": "modern-ecommerce-platform",
          "description": "URL-friendly slug (auto-generated if not provided)"
        },
        "shortDescription": {
          "type": "string",
          "maxLength": 500,
          "example": "A brief overview of the project",
          "description": "A short summary for list views"
        },
        "fullDescription": {
          "type": "string",
          "maxLength": 50000,
          "example": "Detailed description with markdown...",
          "description": "Full project details"
        },
        "contentFormat": {
          "enum": [
            "MARKDOWN",
            "HTML"
          ],
          "type": "string",
          "example": "MARKDOWN",
          "description": "The format of the full description"
        },
        "categoryId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174003",
          "description": "Category ID"
        },
        "tags": {
          "example": [
            "React",
            "NestJS"
          ],
          "description": "List of tags",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "thumbnailId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174004",
          "description": "Main thumbnail image ID"
        },
        "imageIds": {
          "example": [
            "123",
            "456"
          ],
          "description": "Additional gallery image IDs",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "videoId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174005",
          "description": "Video media ID"
        },
        "client": {
          "description": "Client details",
          "allOf": [
            {
              "$ref": "#/components/schemas/ClientDto"
            }
          ]
        },
        "projectDetails": {
          "description": "Technical project details",
          "allOf": [
            {
              "$ref": "#/components/schemas/ProjectDetailsDto"
            }
          ]
        },
        "links": {
          "description": "External links",
          "allOf": [
            {
              "$ref": "#/components/schemas/LinksDto"
            }
          ]
        },
        "seo": {
          "description": "SEO metadata",
          "allOf": [
            {
              "$ref": "#/components/schemas/SeoDto"
            }
          ]
        },
        "featured": {
          "type": "boolean",
          "example": true,
          "description": "Highlight on homepage listings"
        },
        "clientName": {
          "type": "string",
          "maxLength": 100,
          "example": "Confidential Client",
          "description": "Flat client name (admin editor)"
        },
        "clientIndustry": {
          "type": "string",
          "maxLength": 100,
          "example": "E-commerce",
          "description": "Flat client industry (admin editor)"
        },
        "clientWebsite": {
          "type": "string",
          "maxLength": 200,
          "example": "https://acme.com",
          "description": "Flat client website (admin editor)"
        },
        "clientTestimonial": {
          "$ref": "#/components/schemas/ClientTestimonialDto"
        }
      },
      "required": [
        "title",
        "shortDescription",
        "fullDescription",
        "contentFormat"
      ]
    },
    "ReorderItemDto": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174000",
          "description": "Item ID"
        },
        "order": {
          "type": "number",
          "example": 1,
          "description": "The new order rank"
        }
      },
      "required": [
        "id",
        "order"
      ]
    },
    "ReorderPortfolioDto": {
      "type": "object",
      "properties": {
        "items": {
          "description": "List of items and their new order",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/ReorderItemDto"
          }
        }
      },
      "required": [
        "items"
      ]
    },
    "BulkUpdatePortfolioDto": {
      "type": "object",
      "properties": {
        "operation": {
          "enum": [
            "PUBLISH",
            "ARCHIVE",
            "DELETE",
            "FEATURE",
            "UNFEATURE"
          ],
          "type": "string",
          "example": "PUBLISH",
          "description": "The operation to perform"
        },
        "ids": {
          "example": [
            "123",
            "456"
          ],
          "description": "List of portfolio item IDs",
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "operation",
        "ids"
      ]
    },
    "UpdatePortfolioItemDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "maxLength": 200,
          "example": "Modern E-commerce Platform",
          "description": "The title of the portfolio item"
        },
        "slug": {
          "type": "string",
          "pattern": "/^[a-z0-9-]+$/",
          "example": "modern-ecommerce-platform",
          "description": "URL-friendly slug (auto-generated if not provided)"
        },
        "shortDescription": {
          "type": "string",
          "maxLength": 500,
          "example": "A brief overview of the project",
          "description": "A short summary for list views"
        },
        "fullDescription": {
          "type": "string",
          "maxLength": 50000,
          "example": "Detailed description with markdown...",
          "description": "Full project details"
        },
        "contentFormat": {
          "enum": [
            "MARKDOWN",
            "HTML"
          ],
          "type": "string",
          "example": "MARKDOWN",
          "description": "The format of the full description"
        },
        "categoryId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174003",
          "description": "Category ID"
        },
        "tags": {
          "example": [
            "React",
            "NestJS"
          ],
          "description": "List of tags",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "thumbnailId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174004",
          "description": "Main thumbnail image ID"
        },
        "imageIds": {
          "example": [
            "123",
            "456"
          ],
          "description": "Additional gallery image IDs",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "videoId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174005",
          "description": "Video media ID"
        },
        "client": {
          "description": "Client details",
          "allOf": [
            {
              "$ref": "#/components/schemas/ClientDto"
            }
          ]
        },
        "projectDetails": {
          "description": "Technical project details",
          "allOf": [
            {
              "$ref": "#/components/schemas/ProjectDetailsDto"
            }
          ]
        },
        "links": {
          "description": "External links",
          "allOf": [
            {
              "$ref": "#/components/schemas/LinksDto"
            }
          ]
        },
        "seo": {
          "description": "SEO metadata",
          "allOf": [
            {
              "$ref": "#/components/schemas/SeoDto"
            }
          ]
        },
        "featured": {
          "type": "boolean",
          "example": true,
          "description": "Highlight on homepage listings"
        },
        "clientName": {
          "type": "string",
          "maxLength": 100,
          "example": "Confidential Client",
          "description": "Flat client name (admin editor)"
        },
        "clientIndustry": {
          "type": "string",
          "maxLength": 100,
          "example": "E-commerce",
          "description": "Flat client industry (admin editor)"
        },
        "clientWebsite": {
          "type": "string",
          "maxLength": 200,
          "example": "https://acme.com",
          "description": "Flat client website (admin editor)"
        },
        "clientTestimonial": {
          "$ref": "#/components/schemas/ClientTestimonialDto"
        }
      }
    },
    "UpdatePrivacyDto": {
      "type": "object",
      "properties": {
        "visibility": {
          "enum": [
            "PUBLIC",
            "UNLISTED",
            "PRIVATE"
          ],
          "type": "string",
          "example": "PUBLIC",
          "description": "The new visibility state"
        }
      },
      "required": [
        "visibility"
      ]
    },
    "AddMediaDto": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "Media asset ID"
        },
        "mediaId": {
          "type": "string",
          "description": "Alternative media asset ID field"
        },
        "alt": {
          "type": "string",
          "description": "Alt text for the image"
        },
        "caption": {
          "type": "string",
          "description": "Caption for the image"
        },
        "order": {
          "type": "number",
          "minimum": 0,
          "description": "Display order"
        },
        "kind": {
          "type": "string",
          "enum": [
            "IMAGE",
            "VIDEO",
            "DOCUMENT"
          ],
          "description": "Preview asset type"
        },
        "title": {
          "type": "string",
          "maxLength": 200,
          "description": "Display title (documents/videos)"
        }
      }
    }
  }
}

## media.openapi

None

### GET /api/v1/health
Service health
Simple health check for the media service instance.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/upload
Root upload
Exposes direct upload at the root path for specific gateway configurations.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/DirectUploadDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/stats
Get root stats
Retrieve storage statistics for the user at the root level.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/{id}/status
Get processing status
Fetch the real-time processing state of a media asset.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/media
List user media
Retrieve all media files uploaded by the current user with optional filtering.
Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "fileType", "required": false, "in": "query", "description": "Filter by file category", "schema": {"enum": ["IMAGE", "DOCUMENT", "ARCHIVE", "VIDEO"], "type": "string"}}, {"name": "status", "required": false, "in": "query", "description": "Filter by processing status", "schema": {"enum": ["PENDING", "PROCESSING", "UPLOADING", "READY", "FAILED", "QUARANTINED"], "type": "string"}}, {"name": "search", "required": false, "in": "query", "description": "Search filename, mime type, or UUID", "schema": {"type": "string"}}, {"name": "uploaderId", "required": false, "in": "query", "description": "Filter by uploader user ID", "schema": {"type": "string"}}, {"name": "visibility", "required": false, "in": "query", "description": "Public or private bucket", "schema": {"enum": ["PUBLIC", "PRIVATE"], "type": "string"}}, {"name": "contextType", "required": false, "in": "query", "description": "Filter by context type (project, thread, message, folder). Use \"ungrouped\" for orphans.", "schema": {"type": "string"}}, {"name": "contextId", "required": false, "in": "query", "description": "Filter by context id (e.g. project UUID when contextType=project)", "schema": {"type": "string"}}, {"name": "scope", "required": false, "in": "query", "description": "Client list scope: library (default) = owned + accessible project/message/delivery files; owned = uploader only.", "schema": {"default": "library", "enum": ["library", "owned"], "type": "string"}}, {"name": "relatedToUserId", "required": false, "in": "query", "description": "Admin: list media related to this user (their uploads + project/message/delivery files), not only uploaderId.", "schema": {"type": "string"}}, {"name": "includeUrls", "required": false, "in": "query", "description": "When false (default), list responses skip presigned S3 URLs to reduce storage API usage.", "schema": {"default": false, "type": "boolean"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/media/shared
List shared media
Retrieve all media sharing links created by the current user.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/media/upload/request
Request upload
Initiate an upload session by providing file metadata.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RequestUploadDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/media/upload/confirm
Confirm upload
Notify the system that the file upload to storage is complete.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ConfirmUploadDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/media/upload/direct
Direct upload
Multipart upload: required field `file`; optional `fileType` (DOCUMENT|IMAGE|VIDEO|ARCHIVE) or legacy `context=USER_FILE`. Canonical path is POST /api/v1/media/upload/direct; /media/direct-upload is an alias.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/DirectUploadDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/media/storage-usage
Get storage stats
Retrieve current storage usage and limits for the authenticated user.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/media/{id}/status
Get media processing status

Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/media/{id}
Get media details
Fetch detailed metadata and processing status for a specific file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/media/{id}
Update metadata
Modify the descriptive metadata associated with a media file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateMediaMetadataDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/media/{id}
Delete media
Permanently remove a media file and its associated storage assets.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/media/{id}/download
Get download URL
Generate a secure, time-limited URL for downloading the file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/media/{id}/copy
Copy media
Create a duplicate of an existing media file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/media/{id}/move
Move media
Relocate a media file to a new virtual directory.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/media/{id}/regenerate-thumbnail
Regenerate thumbnail
Trigger the re-creation of preview images for this file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/media/{id}/versions
List versions
Fetch all historical versions and revisions of this media file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/media
List all media
Administrative view of all media files uploaded across all users.
Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "fileType", "required": false, "in": "query", "description": "Filter by file category", "schema": {"enum": ["IMAGE", "DOCUMENT", "ARCHIVE", "VIDEO"], "type": "string"}}, {"name": "status", "required": false, "in": "query", "description": "Filter by processing status", "schema": {"enum": ["PENDING", "PROCESSING", "UPLOADING", "READY", "FAILED", "QUARANTINED"], "type": "string"}}, {"name": "search", "required": false, "in": "query", "description": "Search filename, mime type, or UUID", "schema": {"type": "string"}}, {"name": "uploaderId", "required": false, "in": "query", "description": "Filter by uploader user ID", "schema": {"type": "string"}}, {"name": "visibility", "required": false, "in": "query", "description": "Public or private bucket", "schema": {"enum": ["PUBLIC", "PRIVATE"], "type": "string"}}, {"name": "contextType", "required": false, "in": "query", "description": "Filter by context type (project, thread, message, folder). Use \"ungrouped\" for orphans.", "schema": {"type": "string"}}, {"name": "contextId", "required": false, "in": "query", "description": "Filter by context id (e.g. project UUID when contextType=project)", "schema": {"type": "string"}}, {"name": "scope", "required": false, "in": "query", "description": "Client list scope: library (default) = owned + accessible project/message/delivery files; owned = uploader only.", "schema": {"default": "library", "enum": ["library", "owned"], "type": "string"}}, {"name": "relatedToUserId", "required": false, "in": "query", "description": "Admin: list media related to this user (their uploads + project/message/delivery files), not only uploaderId.", "schema": {"type": "string"}}, {"name": "includeUrls", "required": false, "in": "query", "description": "When false (default), list responses skip presigned S3 URLs to reduce storage API usage.", "schema": {"default": false, "type": "boolean"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/media/browse
Browse storage folders
Returns bucket/user/category folder tree for the admin storage browser. Metadata only — no presigned URLs.
Parameters: [{"name": "visibility", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "uploaderId", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "search", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/media/promote-to-portfolio
Promote project deliverable media to public portfolio
Copies a private deliverable attachment into a public portfolio media record.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/PromotePortfolioMediaDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/media/users/{userId}
List user media (admin)
View another user's media library with administrative privileges.
Parameters: [{"name": "userId", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "page", "required": false, "in": "query", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "fileType", "required": false, "in": "query", "description": "Filter by file category", "schema": {"enum": ["IMAGE", "DOCUMENT", "ARCHIVE", "VIDEO"], "type": "string"}}, {"name": "status", "required": false, "in": "query", "description": "Filter by processing status", "schema": {"enum": ["PENDING", "PROCESSING", "UPLOADING", "READY", "FAILED", "QUARANTINED"], "type": "string"}}, {"name": "search", "required": false, "in": "query", "description": "Search filename, mime type, or UUID", "schema": {"type": "string"}}, {"name": "uploaderId", "required": false, "in": "query", "description": "Filter by uploader user ID", "schema": {"type": "string"}}, {"name": "visibility", "required": false, "in": "query", "description": "Public or private bucket", "schema": {"enum": ["PUBLIC", "PRIVATE"], "type": "string"}}, {"name": "contextType", "required": false, "in": "query", "description": "Filter by context type (project, thread, message, folder). Use \"ungrouped\" for orphans.", "schema": {"type": "string"}}, {"name": "contextId", "required": false, "in": "query", "description": "Filter by context id (e.g. project UUID when contextType=project)", "schema": {"type": "string"}}, {"name": "scope", "required": false, "in": "query", "description": "Client list scope: library (default) = owned + accessible project/message/delivery files; owned = uploader only.", "schema": {"default": "library", "enum": ["library", "owned"], "type": "string"}}, {"name": "relatedToUserId", "required": false, "in": "query", "description": "Admin: list media related to this user (their uploads + project/message/delivery files), not only uploaderId.", "schema": {"type": "string"}}, {"name": "includeUrls", "required": false, "in": "query", "description": "When false (default), list responses skip presigned S3 URLs to reduce storage API usage.", "schema": {"default": false, "type": "boolean"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/media/quarantine
List quarantined media
Review media files that have been flagged as potentially harmful.
Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "fileType", "required": false, "in": "query", "description": "Filter by file category", "schema": {"enum": ["IMAGE", "DOCUMENT", "ARCHIVE", "VIDEO"], "type": "string"}}, {"name": "status", "required": false, "in": "query", "description": "Filter by processing status", "schema": {"enum": ["PENDING", "PROCESSING", "UPLOADING", "READY", "FAILED", "QUARANTINED"], "type": "string"}}, {"name": "search", "required": false, "in": "query", "description": "Search filename, mime type, or UUID", "schema": {"type": "string"}}, {"name": "uploaderId", "required": false, "in": "query", "description": "Filter by uploader user ID", "schema": {"type": "string"}}, {"name": "visibility", "required": false, "in": "query", "description": "Public or private bucket", "schema": {"enum": ["PUBLIC", "PRIVATE"], "type": "string"}}, {"name": "contextType", "required": false, "in": "query", "description": "Filter by context type (project, thread, message, folder). Use \"ungrouped\" for orphans.", "schema": {"type": "string"}}, {"name": "contextId", "required": false, "in": "query", "description": "Filter by context id (e.g. project UUID when contextType=project)", "schema": {"type": "string"}}, {"name": "scope", "required": false, "in": "query", "description": "Client list scope: library (default) = owned + accessible project/message/delivery files; owned = uploader only.", "schema": {"default": "library", "enum": ["library", "owned"], "type": "string"}}, {"name": "relatedToUserId", "required": false, "in": "query", "description": "Admin: list media related to this user (their uploads + project/message/delivery files), not only uploaderId.", "schema": {"type": "string"}}, {"name": "includeUrls", "required": false, "in": "query", "description": "When false (default), list responses skip presigned S3 URLs to reduce storage API usage.", "schema": {"default": false, "type": "boolean"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/media/analytics
Get storage analytics
View global statistics on storage consumption, file types, and trends.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/media/storage-usage
Get storage usage
Fetch a concise summary of current disk space usage.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/media/storage-stats
Get storage stats (alias of storage-usage)
NL-BUG-UI-014: aliases expected by the operator console.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/media/stats
Get media stats (alias of analytics)

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/media/orphans
List orphan storage objects

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/media/cleanup
Run storage cleanup
Manually trigger the removal of orphaned files and temporary upload remnants.
Parameters: [{"name": "dryRun", "required": true, "in": "query", "schema": {"type": "boolean"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/media/backfill-context
Backfill deliverable media context
Sets contextType=project and contextId from deliverable→milestone→project for media missing context.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/media/bulk-delete
Bulk delete media
Delete multiple media files with optional force override for references.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/BulkDeleteMediaDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### PATCH /api/v1/admin/media/settings
Update media settings
Configure global upload limits, allowed MIME types, and processing rules.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/media/quarantine/{id}/release
Release from quarantine
Restore a flagged file to its normal state after verification.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### DELETE /api/v1/admin/media/quarantine/{id}
Purge quarantined media
Permanently remove a hazardous file from the system.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "force", "required": true, "in": "query", "schema": {"type": "boolean"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/media/{id}/download
Get media download URL (admin)
Generate a presigned download URL for any file in the system.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/media/{id}/references
Get media references (admin)
List resources that reference this media file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/media/{id}/shares
Get media share links (admin)
List active share links for a media file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/media/{id}/share
Create share link (admin)
Generate a public share link for any media file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ShareMediaDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### DELETE /api/v1/admin/media/{id}/share
Revoke all share links (admin)
Remove every active share link for a media file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/media/{id}/shares/{shareLinkId}
Revoke one share link (admin)
Remove a single share link by ID.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "shareLinkId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/media/{id}
Get media details (admin)
Retrieve comprehensive metadata for any file by its ID.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/media/{id}
Update media metadata (admin)
Patch filename, visibility, and metadata for any media file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/AdminUpdateMediaDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/media/{id}
Force delete media
Administrative deletion of any media file and its assets.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "force", "required": true, "in": "query", "schema": {"type": "boolean"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/media/{id}/reprocess
Reprocess media
Restart automated processing (e.g., thumbnailing, virus scanning) for a file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/media/{id}/replace
Replace media file (admin)
Upload a new file to replace an existing media asset.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "force", "required": true, "in": "query", "schema": {"type": "boolean"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/media/upload/chunked/init
Initialize chunked upload

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/InitChunkUploadDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/media/upload/chunked/{uploadId}/part
Record uploaded chunk part

Parameters: [{"name": "uploadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UploadChunkDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/media/upload/chunked/{uploadId}/complete
Complete chunked upload

Parameters: [{"name": "uploadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CompleteChunkUploadDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/media/upload/chunked/{uploadId}/status
Get chunked upload status

Parameters: [{"name": "uploadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/media/upload/chunked/{uploadId}/abort
Abort chunked upload

Parameters: [{"name": "uploadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/media/{id}/shares
List share links for media
Retrieve active sharing links for a single media file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/media/{id}/share
Create share link
Generate a secure link for external access to a media file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ShareMediaDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### DELETE /api/v1/media/{id}/share
Revoke all share links for media
Immediately disable all active sharing links for this file.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/media/{id}/shares/{shareLinkId}
Revoke one share link
Remove a single sharing link by its ID.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "shareLinkId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/share/{token}
Resolve a public share link (no password)
Returns metadata for unprotected links. Password-protected links require POST with the password in the request body.
Parameters: [{"name": "token", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/share/{token}
Resolve a password-protected public share link
Send `{ "password": "..." }` in the body. Never pass passwords in the URL.
Parameters: [{"name": "token", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ResolveShareDto"}}}}
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "DirectUploadDto": {
      "type": "object",
      "properties": {
        "fileType": {
          "enum": [
            "IMAGE",
            "DOCUMENT",
            "ARCHIVE",
            "VIDEO"
          ],
          "type": "string",
          "description": "Broad category of the file. Inferred from MIME type when omitted (defaults to DOCUMENT)."
        },
        "context": {
          "type": "string",
          "example": "USER_FILE",
          "description": "Legacy upload context hint from older clients. USER_FILE and similar values map to DOCUMENT when fileType is omitted."
        },
        "projectId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000",
          "description": "Associated project ID"
        },
        "threadId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440002",
          "description": "Associated chat thread ID"
        },
        "messageId": {
          "type": "string",
          "example": "660f9511-f30c-52e5-b827-557766551111",
          "description": "Associated message ID"
        }
      }
    },
    "RequestUploadDto": {
      "type": "object",
      "properties": {
        "filename": {
          "type": "string",
          "example": "vacation-photo.jpg",
          "description": "Original filename with extension"
        },
        "mimeType": {
          "type": "string",
          "example": "image/jpeg",
          "description": "Standard MIME type of the file"
        },
        "size": {
          "type": "number",
          "minimum": 1,
          "maximum": 524288000,
          "example": 1048576,
          "description": "File size in bytes"
        },
        "fileType": {
          "enum": [
            "IMAGE",
            "DOCUMENT",
            "ARCHIVE",
            "VIDEO"
          ],
          "type": "string",
          "description": "Broad category of the file"
        },
        "projectId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000",
          "description": "Associated project ID if applicable"
        },
        "threadId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440002",
          "description": "Associated chat thread ID if applicable"
        },
        "messageId": {
          "type": "string",
          "example": "660f9511-f30c-52e5-b827-557766551111",
          "description": "Associated message ID if applicable"
        }
      },
      "required": [
        "filename",
        "mimeType",
        "size",
        "fileType"
      ]
    },
    "ConfirmUploadDto": {
      "type": "object",
      "properties": {
        "uploadId": {
          "type": "string",
          "description": "The unique ID assigned during the upload request"
        }
      },
      "required": [
        "uploadId"
      ]
    },
    "UpdateMediaMetadataDto": {
      "type": "object",
      "properties": {
        "filename": {
          "type": "string",
          "example": "new-filename.png",
          "description": "Updated filename"
        },
        "description": {
          "type": "string",
          "example": "A photo from the event",
          "description": "Brief description"
        },
        "customMetadata": {
          "type": "object",
          "example": {
            "key": "value"
          },
          "description": "Additional custom metadata"
        }
      }
    },
    "PromotePortfolioMediaDto": {
      "type": "object",
      "properties": {
        "sourceMediaId": {
          "type": "string",
          "description": "Private deliverable media ID to copy"
        },
        "portfolioItemId": {
          "type": "string",
          "description": "Target portfolio item ID"
        },
        "projectId": {
          "type": "string",
          "description": "Source project ID (validates media attachment)"
        },
        "role": {
          "enum": [
            "thumbnail",
            "gallery"
          ],
          "type": "string",
          "default": "gallery"
        },
        "alt": {
          "type": "string"
        },
        "caption": {
          "type": "string"
        }
      },
      "required": [
        "sourceMediaId",
        "portfolioItemId",
        "projectId"
      ]
    },
    "BulkDeleteMediaDto": {
      "type": "object",
      "properties": {
        "ids": {
          "description": "Media IDs to delete",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "force": {
          "type": "boolean",
          "description": "Delete even when references exist"
        }
      },
      "required": [
        "ids"
      ]
    },
    "ShareMediaDto": {
      "type": "object",
      "properties": {
        "purpose": {
          "type": "string",
          "maxLength": 500,
          "example": "Client preview for milestone 2 review",
          "description": "Why this link exists \u2014 shown in admin and helps avoid reusing one link for everyone"
        },
        "expiresInSeconds": {
          "type": "number",
          "minimum": 3600,
          "maximum": 7776000,
          "example": 604800,
          "description": "Link lifetime in seconds (required for new links; min 1 hour, max 90 days)"
        },
        "passwordProtected": {
          "type": "boolean",
          "example": false,
          "description": "Whether the link requires a password"
        },
        "password": {
          "type": "string",
          "description": "The password required to access the shared media"
        },
        "allowedEmails": {
          "example": [
            "user@example.com"
          ],
          "description": "List of specific emails allowed to access",
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "purpose"
      ]
    },
    "AdminUpdateMediaDto": {
      "type": "object",
      "properties": {
        "filename": {
          "type": "string",
          "example": "new-filename.png",
          "description": "Updated filename"
        },
        "description": {
          "type": "string",
          "example": "A photo from the event",
          "description": "Brief description"
        },
        "customMetadata": {
          "type": "object",
          "example": {
            "key": "value"
          },
          "description": "Additional custom metadata"
        },
        "visibility": {
          "enum": [
            "PRIVATE",
            "PUBLIC"
          ],
          "type": "string"
        },
        "originalFilename": {
          "type": "string",
          "description": "Override display filename shown in admin UI"
        },
        "metadataPatch": {
          "type": "object",
          "description": "Arbitrary metadata patch merged into metadata JSON"
        }
      }
    },
    "InitChunkUploadDto": {
      "type": "object",
      "properties": {
        "filename": {
          "type": "string",
          "example": "large-video.mp4",
          "description": "Original filename"
        },
        "mimeType": {
          "type": "string",
          "example": "video/mp4",
          "description": "MIME type"
        },
        "totalSize": {
          "type": "number",
          "example": 524288000,
          "description": "Total file size in bytes"
        },
        "fileType": {
          "enum": [
            "IMAGE",
            "DOCUMENT",
            "ARCHIVE",
            "VIDEO"
          ],
          "type": "string"
        },
        "projectId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "threadId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440002"
        },
        "chunkSize": {
          "type": "number",
          "example": 10485760,
          "description": "Chunk size in bytes"
        }
      },
      "required": [
        "filename",
        "mimeType",
        "totalSize"
      ]
    },
    "UploadChunkDto": {
      "type": "object",
      "properties": {
        "uploadId": {
          "type": "string",
          "description": "The unique ID assigned during initialization"
        },
        "partNumber": {
          "type": "number",
          "example": 1,
          "description": "The sequential part number (1-indexed)"
        },
        "etag": {
          "type": "string",
          "description": "ETag returned by storage after uploading the part"
        }
      },
      "required": [
        "uploadId",
        "partNumber",
        "etag"
      ]
    },
    "MultipartPartDto": {
      "type": "object",
      "properties": {
        "partNumber": {
          "type": "number"
        },
        "etag": {
          "type": "string"
        }
      },
      "required": [
        "partNumber",
        "etag"
      ]
    },
    "CompleteChunkUploadDto": {
      "type": "object",
      "properties": {
        "uploadId": {
          "type": "string",
          "description": "Media / session id from init"
        },
        "parts": {
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/MultipartPartDto"
          }
        }
      }
    },
    "ResolveShareDto": {
      "type": "object",
      "properties": {
        "password": {
          "type": "string",
          "description": "Password for a password-protected share link"
        }
      }
    }
  }
}

## gateway.openapi

None

### GET /api/v1/health
Gateway health check
Returns gateway health status
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/detailed
Detailed health check
Returns detailed health status for all infrastructure
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/ready
Readiness probe
Checks if critical services are ready
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/live
Liveness probe
Checks if gateway is alive
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/dependencies
Dependency health
Aggregated health check of all services
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/services/{name}
Check specific service health

Parameters: [{"name": "name", "required": true, "in": "path", "description": "Service name", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### HEAD /api/v1/health/ping
HEAD /health/ping

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/ping
GET /health/ping

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/database
Database health

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/cache
Cache health

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/queue
Queue health

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/storage
Storage health

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/microservices
Microservices health

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/external
External services health

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/workers
Workers health

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/websocket
WebSocket health

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/system
System metrics

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/features
Feature flags health

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/registry
Registry health

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/debug
Admin debug diagnostics (delegate to health service)

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/docs-specs
List available OpenAPI specs
Returns Swagger UI URL and per-microservice spec URLs. Use GET /docs-specs/all for the combined JSON.
Security: []
Responses: {"200": {"description": ""}}

### GET /api/v1/docs-specs/all
Combined OpenAPI spec (gateway + microservices)
Single JSON document merging gateway-facing routes and per-microservice OpenAPI specs. No authentication required.
Security: []
Responses: {"200": {"description": ""}}

### GET /api/v1/docs-specs/{serviceKey}
OpenAPI spec for a microservice
Public proxy used by Swagger UI dropdown. Does not require authentication.
Parameters: [{"name": "serviceKey", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": ""}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    }
  }
}

## users.openapi

None

### GET /api/v1/users/health
Health check
Public health check for the users service.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/users/profile
Get current user profile

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/users/profile
Update profile
Updates specific fields in the user's profile.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateProfileDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Profile updated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/users/avatar
Upload avatar
Uploads and sets a new profile avatar image.
Body: {"required": true, "content": {"multipart/form-data": {"schema": {"type": "object", "properties": {"file": {"type": "string", "format": "binary"}}}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Avatar uploaded successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### DELETE /api/v1/users/avatar
Remove avatar
Removes the current profile avatar image.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Avatar removed successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/users/preferences
Get user preferences
Retrieves the user's application and notification preferences.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/users/preferences
Update user preferences
Updates user's application and notification preferences.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdatePreferencesDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Preferences updated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/users/password
Change password

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ChangePasswordDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Password changed successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/users/change-password
Change password (POST)
Formal endpoint for updating account password (POST alias).
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ChangePasswordDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Password changed successfully. Please login with your new password.", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/users/2fa/enable
Initiate 2FA setup

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Enable2FADto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "2FA setup initiated", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/users/2fa/verify
Verify and finalize 2FA
Finalizes 2FA setup by verifying the first generated TOTP code.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Verify2FASetupDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "2FA enabled successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/users/2fa/disable
Disable 2FA
Permanently disables Multi-Factor Authentication for the account.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Disable2FADto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "2FA disabled successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/users/2fa/status
Get 2FA status
Returns whether 2FA is currently active for the user account.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/users/2fa/backup-codes
Get 2FA backup codes
Retrieves current recovery/backup codes for Multi-Factor Authentication.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/users/2fa/regenerate-codes
Regenerate 2FA backup codes
Generates a fresh set of recovery/backup codes for 2FA.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/Enable2FADto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Backup codes regenerated", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/users/sessions
List active sessions

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/users/sessions/{sessionId}
Get session details
Retrieves specific metadata for a single active login session.
Parameters: [{"name": "sessionId", "required": true, "in": "path", "description": "Session UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/users/sessions/{sessionId}
Terminate specific session
Immediately terminates a specific login session.
Parameters: [{"name": "sessionId", "required": true, "in": "path", "description": "Session UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Session terminated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/users/sessions/terminate-others
Terminate all other sessions
Revokes all active user sessions except for the current one.
Security: [{"bearer": []}]
Responses: {"200": {"description": "All other sessions terminated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/users/delete-account
Request account deletion

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/DeleteAccountDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Account deletion scheduled. You have 30 days to cancel this request.", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/users/cancel-deletion
Cancel deletion request
Aborts a previously scheduled account deletion request.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Account deletion cancelled successfully.", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/users/activity
Get user activity log

Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"example": "1", "type": "string"}}, {"name": "limit", "required": false, "in": "query", "schema": {"example": "20", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/users/export
Request data export
Triggers a job to prepare a complete archive of user data for export.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/users/data-export
Request data export (alias)
Formal endpoint for requesting data export (Spec compliant alias).
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/users/export/{id}
Download data export
Direct download of a previously generated data export archive.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Export Job UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/users
List all users (ADMIN only)

Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"example": "1", "type": "string"}}, {"name": "limit", "required": false, "in": "query", "schema": {"example": "20", "type": "string"}}, {"name": "status", "required": false, "in": "query", "schema": {"example": "ACTIVE", "type": "string"}}, {"name": "role", "required": false, "in": "query", "schema": {"example": "USER", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/users/search
Search users

Parameters: [{"name": "q", "required": true, "in": "query", "description": "Search query string", "schema": {"type": "string"}}, {"name": "page", "required": false, "in": "query", "schema": {"example": "1", "type": "string"}}, {"name": "limit", "required": false, "in": "query", "schema": {"example": "20", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/users/security-stats
Security statistics (users path alias)

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/users/bulk
Bulk user operations

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/AdminBulkOperationDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Bulk operation completed", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### DELETE /api/v1/admin/users/sessions/{sessionId}
Terminate specific user session

Parameters: [{"name": "sessionId", "required": true, "in": "path", "description": "Session UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "User session terminated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/users/logs
List admin user-management audit logs
Must be registered before @Get(':userId') so "logs" is not treated as a user id.
Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"example": "1", "type": "string"}}, {"name": "limit", "required": false, "in": "query", "schema": {"example": "50", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/users/logs/security-stats
Get security statistics (users path)

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/users/{userId}
Get user details

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/users/{userId}
Update user (Admin)

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}, {"name": "user-agent", "required": true, "in": "header", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/AdminUpdateUserDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "User updated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/users/{userId}
Delete user account (soft delete)

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "User deleted successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/users/{userId}/role
Change user role

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}, {"name": "user-agent", "required": true, "in": "header", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/AdminChangeRoleDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "User role updated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/users/{userId}/status
Change user status

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}, {"name": "user-agent", "required": true, "in": "header", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/AdminChangeStatusDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "User status updated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/users/{userId}/force-password-reset
Force password reset

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}, {"name": "user-agent", "required": true, "in": "header", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Password reset forced. User will be required to change password on next login.", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/users/{userId}/reset-password
Manually reset password

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}, {"name": "user-agent", "required": true, "in": "header", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/AdminResetPasswordDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Password reset successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/users/{userId}/sessions
Get user active sessions

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/users/{userId}/terminate-all-sessions
Terminate all user sessions

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "All user sessions terminated", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/users/{userId}/export
Trigger user data export (GDPR)

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Data export queued", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/users/{userId}/activity
Get user activity log

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}, {"name": "page", "required": false, "in": "query", "schema": {"example": "1", "type": "string"}}, {"name": "limit", "required": false, "in": "query", "schema": {"example": "50", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/users/{userId}/restore
Restore user account

Parameters: [{"name": "userId", "required": true, "in": "path", "description": "User UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "User restored successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/logs
List authentication audit logs

Parameters: [{"name": "page", "required": false, "in": "query", "schema": {"example": "1", "type": "string"}}, {"name": "limit", "required": false, "in": "query", "schema": {"example": "50", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/logs/security-stats
Security metrics for audit dashboard

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "UpdateProfileDto": {
      "type": "object",
      "properties": {
        "firstName": {
          "type": "string",
          "minLength": 2,
          "maxLength": 50,
          "description": "User's first name",
          "example": "John"
        },
        "lastName": {
          "type": "string",
          "minLength": 2,
          "maxLength": 50,
          "description": "User's last name",
          "example": "Doe"
        },
        "phone": {
          "type": "string",
          "pattern": "/^\\+?[1-9]\\d{1,14}$/",
          "description": "User's phone number in E.164 format",
          "example": "+1234567890"
        },
        "headline": {
          "type": "string",
          "maxLength": 160,
          "description": "Short professional tagline shown on the public profile",
          "example": "Full-stack developer"
        },
        "bio": {
          "type": "string",
          "maxLength": 2000,
          "description": "Longer profile bio",
          "example": "I build payment systems for SaaS."
        },
        "skills": {
          "description": "Skills or expertise tags",
          "example": [
            "React",
            "NestJS"
          ],
          "type": "array",
          "items": {
            "type": "string",
            "maxLength": 50
          }
        },
        "timezone": {
          "type": "string",
          "description": "User's preferred timezone",
          "example": "UTC"
        },
        "language": {
          "type": "string",
          "maxLength": 2,
          "description": "User preferred language (ISO 639-1)",
          "example": "en"
        },
        "country": {
          "type": "string",
          "maxLength": 2,
          "description": "User country (ISO 3166-1 alpha-2)",
          "example": "US"
        }
      }
    },
    "EmailNotificationsDto": {
      "type": "object",
      "properties": {
        "projectUpdates": {
          "type": "boolean",
          "description": "Enable/disable project update emails",
          "example": true
        },
        "paymentReminders": {
          "type": "boolean",
          "description": "Enable/disable payment reminder emails",
          "example": true
        },
        "marketing": {
          "type": "boolean",
          "description": "Enable/disable marketing emails",
          "example": false
        },
        "digest": {
          "type": "string",
          "enum": [
            "daily",
            "weekly",
            "never"
          ],
          "description": "Frequency of account activity digests",
          "example": "weekly"
        }
      }
    },
    "PushNotificationsDto": {
      "type": "object",
      "properties": {
        "messages": {
          "type": "boolean",
          "description": "Enable/disable message push notifications",
          "example": true
        },
        "projectUpdates": {
          "type": "boolean",
          "description": "Enable/disable project update push notifications",
          "example": true
        }
      }
    },
    "NotificationsDto": {
      "type": "object",
      "properties": {
        "email": {
          "description": "Email notification settings",
          "allOf": [
            {
              "$ref": "#/components/schemas/EmailNotificationsDto"
            }
          ]
        },
        "push": {
          "description": "Push notification settings",
          "allOf": [
            {
              "$ref": "#/components/schemas/PushNotificationsDto"
            }
          ]
        }
      }
    },
    "PrivacyPreferencesDto": {
      "type": "object",
      "properties": {
        "profileVisibility": {
          "type": "string",
          "enum": [
            "public",
            "private",
            "connections"
          ],
          "description": "Determines who can view the user profile",
          "example": "public"
        },
        "showEmail": {
          "type": "boolean",
          "description": "Whether to expose email on public profile",
          "example": false
        },
        "showPhone": {
          "type": "boolean",
          "description": "Whether to expose phone number on public profile",
          "example": false
        }
      }
    },
    "UpdatePreferencesDto": {
      "type": "object",
      "properties": {
        "notifications": {
          "description": "Notification preference overrides",
          "allOf": [
            {
              "$ref": "#/components/schemas/NotificationsDto"
            }
          ]
        },
        "privacy": {
          "description": "Privacy and visibility overrides",
          "allOf": [
            {
              "$ref": "#/components/schemas/PrivacyPreferencesDto"
            }
          ]
        }
      }
    },
    "ChangePasswordDto": {
      "type": "object",
      "properties": {
        "currentPassword": {
          "type": "string",
          "description": "The current password for verification",
          "example": "OldPass123!"
        },
        "newPassword": {
          "type": "string",
          "minLength": 8,
          "maxLength": 64,
          "pattern": "/((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$/",
          "description": "New password meeting complexity requirements",
          "example": "NewSecurePass99!",
          "format": "password"
        },
        "confirmPassword": {
          "type": "string",
          "description": "Confirmation of the new password",
          "example": "NewSecurePass99!"
        }
      },
      "required": [
        "currentPassword",
        "newPassword",
        "confirmPassword"
      ]
    },
    "Enable2FADto": {
      "type": "object",
      "properties": {
        "password": {
          "type": "string",
          "minLength": 1,
          "description": "User password for identity verification before 2FA activation",
          "example": "UserSecret123!",
          "format": "password"
        }
      },
      "required": [
        "password"
      ]
    },
    "Verify2FASetupDto": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string",
          "minLength": 6,
          "maxLength": 6,
          "description": "The 6-digit verification code generated by the authenticator app",
          "example": "123456"
        }
      },
      "required": [
        "code"
      ]
    },
    "Disable2FADto": {
      "type": "object",
      "properties": {
        "password": {
          "type": "string",
          "minLength": 1,
          "description": "User password for identity verification",
          "example": "UserSecret123!",
          "format": "password"
        },
        "code": {
          "type": "string",
          "minLength": 6,
          "maxLength": 6,
          "description": "Current 6-digit TOTP code for final verification",
          "example": "654321"
        }
      },
      "required": [
        "password",
        "code"
      ]
    },
    "DeleteAccountDto": {
      "type": "object",
      "properties": {
        "password": {
          "type": "string",
          "description": "The user password for verification (required for non-OAuth users)",
          "example": "UserSecretPassword123!",
          "format": "password"
        },
        "reason": {
          "type": "string",
          "maxLength": 50,
          "description": "Primary reason for account deletion",
          "example": "Privacy concerns"
        },
        "feedback": {
          "type": "string",
          "maxLength": 500,
          "description": "Detailed qualitative feedback on the platform experience",
          "example": "The platform was missing specific integration support for my region."
        }
      },
      "required": [
        "reason"
      ]
    },
    "AdminBulkOperationDto": {
      "type": "object",
      "properties": {
        "userIds": {
          "description": "Array of user identification strings (UUIDs)",
          "example": [
            "550e8400-e29b-41d4-a716-446655440000",
            "550e8400-e29b-41d4-a716-446655440001"
          ],
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "action": {
          "enum": [
            "suspend",
            "activate",
            "delete",
            "resetPassword"
          ],
          "type": "string",
          "description": "The specific administrative action to execute",
          "example": "suspend"
        },
        "reason": {
          "type": "string",
          "description": "Compulsory justification or reasoning for the bulk action (Audit log requirement)",
          "example": "Security breach suspected across multiple related accounts.",
          "maxLength": 500
        }
      },
      "required": [
        "userIds",
        "action"
      ]
    },
    "AdminUpdateUserDto": {
      "type": "object",
      "properties": {
        "firstName": {
          "type": "string",
          "description": "User's first name override",
          "example": "Jane"
        },
        "lastName": {
          "type": "string",
          "description": "User's last name override",
          "example": "Smith"
        },
        "email": {
          "type": "string",
          "description": "Primary active email address of the user",
          "example": "jane.smith@example.com"
        },
        "status": {
          "enum": [
            "ACTIVE",
            "SUSPENDED",
            "DELETED",
            "PENDING_DELETION"
          ],
          "type": "string",
          "description": "Account lifecycle status",
          "example": "ACTIVE"
        }
      }
    },
    "AdminChangeRoleDto": {
      "type": "object",
      "properties": {
        "role": {
          "enum": [
            "USER",
            "ADMIN"
          ],
          "type": "string",
          "description": "The target system role to assign to the user",
          "example": "USER"
        }
      },
      "required": [
        "role"
      ]
    },
    "AdminChangeStatusDto": {
      "type": "object",
      "properties": {
        "status": {
          "enum": [
            "ACTIVE",
            "SUSPENDED",
            "DELETED",
            "PENDING_DELETION"
          ],
          "type": "string",
          "example": "ACTIVE"
        }
      },
      "required": [
        "status"
      ]
    },
    "AdminResetPasswordDto": {
      "type": "object",
      "properties": {
        "newPassword": {
          "type": "string",
          "minLength": 8,
          "description": "New password set by administrator (min 8 characters). Never returned in the API response."
        }
      },
      "required": [
        "newPassword"
      ]
    }
  }
}

## progress.openapi

None

### GET /api/v1/progress/health
Progress service health check

Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/progress/projects/{projectId}
Create progress entry
Creates a new progress entry for a project.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateProgressEntryDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "ProgressEntryResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/ProgressEntryResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/progress/projects/{projectId}
List progress entries for project
Lists all progress entries for a specific project.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}, {"name": "type", "required": false, "in": "query", "description": "Filter by type of progress entry", "schema": {"example": "UPDATE", "enum": ["UPDATE", "MILESTONE_COMPLETE", "DELIVERABLE_UPLOAD", "STATUS_CHANGE", "INTERNAL_NOTE"], "type": "string"}}, {"name": "page", "required": false, "in": "query", "description": "Page number for pagination", "schema": {"minimum": 1, "default": 1, "example": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "description": "Number of items per page", "schema": {"minimum": 1, "maximum": 100, "default": 20, "example": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit. Accepted so clients using pageSize are not rejected.", "schema": {"minimum": 1, "maximum": 100, "example": 20, "type": "number"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "ProgressEntryResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "array", "items": {"$ref": "#/components/schemas/ProgressEntryResponseDto"}}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/progress/{id}
Update progress entry
Updates an existing progress entry.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Progress entry UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateProgressEntryDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "ProgressEntryResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/ProgressEntryResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/progress/{id}
Delete progress entry
Deletes a progress entry.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Progress entry UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "204": {"description": "Entry deleted successfully"}}

### GET /api/v1/admin/progress/projects/{projectId}/analytics
Get progress analytics for project
Gets analytics data for project progress.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/progress/projects/{projectId}/timeline
Get full administrative timeline for project
Gets the full administrative timeline for a project.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/progress/projects/{projectId}/status
Update project status (admin)
Override and update the current lifecycle status of a project. Deprecated — prefer PATCH /admin/projects/:id/status on the projects service.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/progress/projects/{projectId}/complete
Mark project as complete (admin)
Finalize a project and record its completion details in the system.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/projects/{projectId}/milestones
Create milestone
Creates a new milestone for a project.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateMilestoneDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "MilestoneResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/MilestoneResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### PATCH /api/v1/admin/milestones/{id}
Update milestone
Updates an existing milestone's details (dates, description, etc.).
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Milestone UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateMilestoneDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "MilestoneResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/MilestoneResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/milestones/{id}/complete
Mark milestone complete
Manually marks a milestone as physically complete, pending client approval.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Milestone UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/projects/{projectId}/deliverables
Upload deliverable
Uploads a new deliverable submission for a project.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UploadDeliverableDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "DeliverableResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/DeliverableResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/projects/{projectId}/deliverables
List project deliverables
Lists all deliverables submitted for a specific project.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Project UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "DeliverableResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "array", "items": {"$ref": "#/components/schemas/DeliverableResponseDto"}}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/deliverables/{id}
Update deliverable metadata
Updates the metadata or description of an existing deliverable.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Deliverable UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateDeliverableDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "DeliverableResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/DeliverableResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/deliverables/{id}
Delete deliverable
Permanent removal of a deliverable submission.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Deliverable UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "204": {"description": "Deliverable deleted"}}

### GET /api/v1/projects/{projectId}/progress
Get progress timeline for project
Retrieves the historical timeline of progress updates for a specific project.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Unique identifier of the project", "schema": {"type": "string"}}, {"name": "type", "required": false, "in": "query", "description": "Filter by type of progress entry", "schema": {"example": "UPDATE", "enum": ["UPDATE", "MILESTONE_COMPLETE", "DELIVERABLE_UPLOAD", "STATUS_CHANGE", "INTERNAL_NOTE"], "type": "string"}}, {"name": "page", "required": false, "in": "query", "description": "Page number for pagination", "schema": {"minimum": 1, "default": 1, "example": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "description": "Number of items per page", "schema": {"minimum": 1, "maximum": 100, "default": 20, "example": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit. Accepted so clients using pageSize are not rejected.", "schema": {"minimum": 1, "maximum": 100, "example": 20, "type": "number"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "ProgressEntryResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "array", "items": {"$ref": "#/components/schemas/ProgressEntryResponseDto"}}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/projects/{projectId}/progress
Create a progress entry for a project (admin only)
Manually creates a progress entry (admin-only; clients use request-changes).
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Unique identifier of the project", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateProgressEntryDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "ProgressEntryResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/ProgressEntryResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/projects/{projectId}/progress/status
Get overall project status summary
Fetch a concise overview of the project's current health and advancement.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Unique identifier of the project", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/projects/{projectId}/progress/milestones
Get milestone progress for project
Retrieve tracking information for all major project milestones.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Unique identifier of the project", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/projects/{projectId}/progress/request-changes
Request revisions on project progress
Submit a formal request for modifications to current project outputs.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Unique identifier of the project", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RequestChangesDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "Revision request successfully submitted"}}

### GET /api/v1/projects/{projectId}/progress/{entryId}
Get single progress entry
Retrieves details for a specific progress entry.
Parameters: [{"name": "projectId", "required": true, "in": "path", "description": "Unique identifier of the project", "schema": {"type": "string"}}, {"name": "entryId", "required": true, "in": "path", "description": "Progress entry UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "ProgressEntryResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/ProgressEntryResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/milestones/{id}/approve
Approve a milestone
Approves a milestone, marking it as finalized and potentially triggering payment milestones.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Milestone UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ApproveMilestoneDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/milestones/{id}/request-revision
Request revision on a milestone
Requests a revision for a completed milestone if requirements were not fully met.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Milestone UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RequestMilestoneRevisionDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/deliverables/{id}/approve
Approve a deliverable
Approves a specific deliverable submission.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Deliverable UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/ApproveDeliverableDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/deliverables/{id}/reject
Reject a deliverable
Rejects a deliverable submission, typically requiring changes.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Deliverable UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RejectDeliverableDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/time-entries
List time entries for a milestone or project

Parameters: [{"name": "milestoneId", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "projectId", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/time-entries
Log time against a milestone

Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "ProgressEntryResponseDto": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174333",
          "description": "Unique identifier for the progress entry"
        },
        "type": {
          "enum": [
            "UPDATE",
            "MILESTONE_COMPLETE",
            "DELIVERABLE_UPLOAD",
            "STATUS_CHANGE",
            "INTERNAL_NOTE"
          ],
          "type": "string",
          "example": "UPDATE",
          "description": "The type of progress update"
        },
        "title": {
          "type": "string",
          "example": "Research Complete",
          "description": "The title of the update"
        },
        "description": {
          "type": "string",
          "example": "Finished all user interviews for the initial phase.",
          "description": "Detailed content of the update"
        },
        "milestoneId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174111",
          "description": "Optional associated milestone ID"
        },
        "attachments": {
          "description": "Attached files or media references",
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "visibility": {
          "enum": [
            "CLIENT_VISIBLE",
            "INTERNAL"
          ],
          "type": "string",
          "example": "CLIENT_VISIBLE",
          "description": "Privacy level of the entry"
        },
        "createdBy": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174000",
          "description": "User ID of the creator"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string",
          "example": "2024-01-10T16:00:00Z",
          "description": "Timestamp of creation"
        }
      },
      "required": [
        "id",
        "type",
        "title",
        "description",
        "visibility",
        "createdBy",
        "createdAt"
      ]
    },
    "CreateProgressEntryDto": {
      "type": "object",
      "properties": {
        "type": {
          "enum": [
            "UPDATE",
            "MILESTONE_COMPLETE",
            "DELIVERABLE_UPLOAD",
            "STATUS_CHANGE",
            "INTERNAL_NOTE"
          ],
          "type": "string",
          "example": "UPDATE",
          "description": "The type of progress update"
        },
        "title": {
          "type": "string",
          "maxLength": 200,
          "example": "Backend Infrastructure Ready",
          "description": "Short title for the update"
        },
        "description": {
          "type": "string",
          "maxLength": 5000,
          "example": "Completed the migration to the new database schema...",
          "description": "Detailed update content"
        },
        "milestoneId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174111",
          "description": "Associated milestone UUID"
        },
        "deliverableIds": {
          "example": [
            "123e4567-e89b-12d3-a456-426614174222"
          ],
          "description": "List of deliverable UUIDs covered by this update",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "attachmentIds": {
          "example": [
            "123e4567-e89b-12d3-a456-426614174444"
          ],
          "description": "List of media/attachment UUIDs",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "notifyClient": {
          "type": "boolean",
          "default": true,
          "description": "Whether to send a notification to the client"
        },
        "visibility": {
          "default": "CLIENT_VISIBLE",
          "enum": [
            "CLIENT_VISIBLE",
            "INTERNAL"
          ],
          "type": "string",
          "description": "Who can see this progress entry"
        }
      },
      "required": [
        "type",
        "title",
        "description"
      ]
    },
    "UpdateProgressEntryDto": {
      "type": "object",
      "properties": {
        "type": {
          "enum": [
            "UPDATE",
            "MILESTONE_COMPLETE",
            "DELIVERABLE_UPLOAD",
            "STATUS_CHANGE",
            "INTERNAL_NOTE"
          ],
          "type": "string",
          "example": "UPDATE",
          "description": "The type of progress update"
        },
        "title": {
          "type": "string",
          "maxLength": 200,
          "example": "Backend Infrastructure Ready",
          "description": "Short title for the update"
        },
        "description": {
          "type": "string",
          "maxLength": 5000,
          "example": "Completed the migration to the new database schema...",
          "description": "Detailed update content"
        },
        "milestoneId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174111",
          "description": "Associated milestone UUID"
        },
        "deliverableIds": {
          "example": [
            "123e4567-e89b-12d3-a456-426614174222"
          ],
          "description": "List of deliverable UUIDs covered by this update",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "attachmentIds": {
          "example": [
            "123e4567-e89b-12d3-a456-426614174444"
          ],
          "description": "List of media/attachment UUIDs",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "notifyClient": {
          "type": "boolean",
          "default": true,
          "description": "Whether to send a notification to the client"
        },
        "visibility": {
          "default": "CLIENT_VISIBLE",
          "enum": [
            "CLIENT_VISIBLE",
            "INTERNAL"
          ],
          "type": "string",
          "description": "Who can see this progress entry"
        }
      }
    },
    "DeliverableResponseDto": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174222",
          "description": "Unique identifier for the deliverable"
        },
        "milestoneId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174111",
          "description": "Associated milestone ID"
        },
        "description": {
          "type": "string",
          "example": "Phase 1 Documentation Draft",
          "description": "Optional description of the deliverable"
        },
        "media": {
          "description": "Metadata for associated media/files",
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "status": {
          "enum": [
            "PENDING",
            "IN_PROGRESS",
            "READY_FOR_REVIEW",
            "REVISION_REQUESTED",
            "APPROVED",
            "REJECTED"
          ],
          "type": "string",
          "example": "PENDING",
          "description": "Current status of the deliverable"
        },
        "version": {
          "type": "number",
          "example": 1,
          "description": "Submission version number"
        },
        "reviewStatus": {
          "type": "object",
          "description": "Current review status/notes"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string",
          "example": "2024-01-10T15:30:00Z",
          "description": "Timestamp of creation"
        }
      },
      "required": [
        "id",
        "milestoneId",
        "media",
        "status",
        "version",
        "createdAt"
      ]
    },
    "MilestoneResponseDto": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174111",
          "description": "Unique identifier for the milestone"
        },
        "name": {
          "type": "string",
          "example": "Initial Research Phase",
          "description": "The name of the milestone"
        },
        "description": {
          "type": "string",
          "example": "Deep dive into user requirements and market analysis",
          "description": "Optional detailed description"
        },
        "status": {
          "enum": [
            "PENDING",
            "IN_PROGRESS",
            "REVIEW",
            "COMPLETED",
            "APPROVED",
            "REVISION_REQUESTED",
            "CANCELLED"
          ],
          "type": "string",
          "example": "IN_PROGRESS",
          "description": "Current status of the milestone"
        },
        "startDate": {
          "format": "date-time",
          "type": "string",
          "example": "2024-01-01T00:00:00Z",
          "description": "Scheduled start date"
        },
        "endDate": {
          "format": "date-time",
          "type": "string",
          "example": "2024-01-15T00:00:00Z",
          "description": "Scheduled end date"
        },
        "completionPercentage": {
          "type": "number",
          "example": 45,
          "description": "Completion percentage (0-100)"
        },
        "deliverables": {
          "description": "List of deliverables associated with this milestone",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/DeliverableResponseDto"
          }
        },
        "approvedAt": {
          "format": "date-time",
          "type": "string",
          "example": "2024-01-16T10:00:00Z",
          "description": "Timestamp of client approval"
        },
        "order": {
          "type": "number",
          "example": 1,
          "description": "Display order of the milestone in the project sequence"
        }
      },
      "required": [
        "id",
        "name",
        "status",
        "startDate",
        "endDate",
        "completionPercentage",
        "deliverables",
        "order"
      ]
    },
    "CreateMilestoneDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 200,
          "example": "Frontend MVP Development",
          "description": "The name of the milestone"
        },
        "description": {
          "type": "string",
          "example": "Implementation of the core frontend features...",
          "description": "Detailed description of milestone objectives"
        },
        "startDate": {
          "type": "string",
          "example": "2024-02-01",
          "description": "Expected start date (ISO string)"
        },
        "endDate": {
          "type": "string",
          "example": "2024-02-15",
          "description": "Expected completion date (ISO string)"
        },
        "dueDate": {
          "type": "string",
          "example": "2024-02-15",
          "description": "Due date alias (ISO string). Falls back to endDate if omitted."
        },
        "amount": {
          "type": "number",
          "minimum": 0,
          "example": 5000,
          "description": "Payment amount for this milestone (in smallest currency unit, e.g. paise for INR)"
        },
        "currency": {
          "type": "string",
          "example": "INR",
          "description": "Currency code for the milestone payment amount"
        },
        "deliverables": {
          "example": [
            "Homepage UI",
            "Auth Flow"
          ],
          "description": "Initial list of deliverable titles",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "order": {
          "type": "number",
          "example": 2,
          "description": "The sequential order of this milestone"
        }
      },
      "required": [
        "name",
        "startDate",
        "endDate"
      ]
    },
    "UpdateMilestoneDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 200,
          "example": "Frontend MVP Development",
          "description": "The name of the milestone"
        },
        "description": {
          "type": "string",
          "example": "Implementation of the core frontend features...",
          "description": "Detailed description of milestone objectives"
        },
        "startDate": {
          "type": "string",
          "example": "2024-02-01",
          "description": "Expected start date (ISO string)"
        },
        "endDate": {
          "type": "string",
          "example": "2024-02-15",
          "description": "Expected completion date (ISO string)"
        },
        "dueDate": {
          "type": "string",
          "example": "2024-02-15",
          "description": "Due date alias (ISO string). Falls back to endDate if omitted."
        },
        "amount": {
          "type": "number",
          "minimum": 0,
          "example": 5000,
          "description": "Payment amount for this milestone (in smallest currency unit, e.g. paise for INR)"
        },
        "currency": {
          "type": "string",
          "example": "INR",
          "description": "Currency code for the milestone payment amount"
        },
        "deliverables": {
          "example": [
            "Homepage UI",
            "Auth Flow"
          ],
          "description": "Initial list of deliverable titles",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "order": {
          "type": "number",
          "example": 2,
          "description": "The sequential order of this milestone"
        }
      }
    },
    "UploadDeliverableDto": {
      "type": "object",
      "properties": {
        "milestoneId": {
          "type": "string",
          "example": "123e4567-e89b-12d3-a456-426614174111",
          "description": "Target milestone ID"
        },
        "mediaIds": {
          "example": [
            "123e4567-e89b-12d3-a456-426614174555"
          ],
          "description": "List of media UUIDs for the deliverable",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string",
          "maxLength": 200,
          "example": "Logo suite",
          "description": "Client-facing deliverable name (defaults to milestone name or description)"
        },
        "description": {
          "type": "string",
          "maxLength": 1000,
          "example": "Initial draft for review",
          "description": "Optional description or notes"
        }
      },
      "required": [
        "milestoneId",
        "mediaIds"
      ]
    },
    "UpdateDeliverableDto": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "maxLength": 1000,
          "example": "Revised draft with updated branding...",
          "description": "Updated description or notes"
        },
        "status": {
          "type": "string",
          "enum": [
            "PENDING",
            "IN_PROGRESS",
            "READY_FOR_REVIEW",
            "REVISION_REQUESTED",
            "APPROVED",
            "REJECTED"
          ],
          "description": "Moderation status (admin)"
        },
        "rejectionReason": {
          "type": "string",
          "maxLength": 1000,
          "example": "Does not meet acceptance criteria for milestone 2.",
          "description": "Reason when rejecting a deliverable"
        }
      }
    },
    "ChangeRequestDetailDto": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "maxLength": 500,
          "example": "Add social login options",
          "description": "Description of the specific change"
        }
      },
      "required": [
        "description"
      ]
    },
    "RequestChangesDto": {
      "type": "object",
      "properties": {
        "reason": {
          "type": "string",
          "maxLength": 2000,
          "example": "Scope adjustment based on latest feedback",
          "description": "Overall reason for the change request"
        },
        "details": {
          "description": "List of specific granular changes required (optional; omit to avoid duplicating reason)",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/ChangeRequestDetailDto"
          }
        }
      },
      "required": [
        "reason"
      ]
    },
    "ApproveMilestoneDto": {
      "type": "object",
      "properties": {
        "feedback": {
          "type": "string",
          "maxLength": 1000,
          "example": "Excellent work on the initial phase. Proceed to the next milestone.",
          "description": "Optional feedback for the studio"
        }
      }
    },
    "RequestMilestoneRevisionDto": {
      "type": "object",
      "properties": {
        "reason": {
          "type": "string",
          "maxLength": 2000,
          "example": "Need more time for the research phase due to data access issues",
          "description": "Reason for requesting a revision"
        }
      },
      "required": [
        "reason"
      ]
    },
    "ApproveDeliverableDto": {
      "type": "object",
      "properties": {
        "rating": {
          "type": "number",
          "minimum": 1,
          "maximum": 5,
          "example": 5,
          "description": "Optional rating for the work provided"
        },
        "feedback": {
          "type": "string",
          "maxLength": 1000,
          "example": "The deliverable meets all requirements.",
          "description": "Optional feedback for the studio"
        }
      }
    },
    "RejectDeliverableDto": {
      "type": "object",
      "properties": {
        "reason": {
          "type": "string",
          "minLength": 1,
          "maxLength": 2000,
          "example": "The branding colors do not match the style guide.",
          "description": "The reason for rejection"
        },
        "requestedChanges": {
          "example": [
            "Update primary color to #FF5733",
            "Fix alignment on header"
          ],
          "description": "Specific changes requested",
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "reason"
      ]
    }
  }
}

## quotes.openapi

None

### GET /api/v1/quotes/health
Service health check
Confirm that the quotes microservice is alive and operational.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/quotes
List my quotes
Fetch all quotes and proposals that have been sent to your account.
Parameters: [{"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "status", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "sortBy", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "sortOrder", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/quotes/stats
Get user quote statistics
Fetch a bird-eye view of your quoting activity, including acceptance rates.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/quotes/{id}
Get quote details
Retrieves detailed information for a specific quote.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/quotes/{id}/accept
Accept quote
Accepts a quote and initiates the project creation workflow.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/AcceptQuoteDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Quote accepted successfully. Project has been created.", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/quotes/{id}/decline
Decline quote
Declines a quote with optional qualitative feedback.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/DeclineQuoteDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Quote declined. Your feedback has been sent.", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/quotes/{id}/request-changes
Request quote changes
Requests specific modifications or clarifications on a quote.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RequestQuoteChangesDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Change request submitted.", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/quotes/{id}/pdf
Download quote PDF
Returns a presigned cloud storage URL for the latest quote PDF.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/quotes
List all quotes (Admin)
Access the global repository of all client proposals and issued quotes.
Parameters: [{"name": "page", "required": false, "in": "query", "description": "Page number", "schema": {"example": "1", "type": "string"}}, {"name": "limit", "required": false, "in": "query", "description": "Results per page", "schema": {"example": "20", "type": "string"}}, {"name": "userId", "required": false, "in": "query", "description": "Filter by client user ID", "schema": {"type": "string"}}, {"name": "status", "required": false, "in": "query", "description": "Filter by quote status, or use queue shortcuts: inbox (needs attention), all (no filter). Default excludes accepted/declined/expired.", "schema": {"example": "inbox", "type": "string"}}, {"name": "sortBy", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "sortOrder", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/quotes
Create and issue a new quote
Legacy path. Prefer POST /admin/requests/:id/quotes for request-first quoting with line items and tier discounts.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateQuoteAdminDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Quote created successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/quotes/stats
Get overall quote statistics
Access administrative KPIs including total volume, conversion rates, and revenue trends.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/quotes/templates
List quote templates (deprecated)
Deprecated (CODE-GAP-003). Returns empty templates array plus line-item library blocks. Use GET /admin/quotes/line-item-library instead.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/quotes/templates
Create quote template (removed)
Removed (CODE-GAP-003). Use POST /admin/quotes/line-item-library for reusable blocks.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "410": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/admin/quotes/line-item-library
List reusable quote line-item blocks
Modular building blocks for admin quote creation (not frozen full quotes).
Parameters: [{"name": "includeInactive", "required": false, "in": "query", "schema": {"example": "false", "type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/quotes/line-item-library
Create a line-item library block

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateLineItemBlockDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Line-item block created", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### PATCH /api/v1/admin/quotes/line-item-library/{id}
Update a line-item library block

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Block UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateLineItemBlockDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Line-item block updated", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/quotes/line-item-library/{id}
Deactivate a line-item library block

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Block UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Line-item block deactivated", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/quotes/payment-schedule-presets
List payment schedule presets
Built-in installment templates the admin can apply when creating a quote.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/quotes/{id}/send
Send quote to client
Sends/Issues a finalized quote to the client via configured channels.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Quote sent successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/quotes/{id}/resend
Resend quote notification
Triggers a resend of the quote notification to the client.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Quote notification resent", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/quotes/{id}
Get quote administrative details
Retrieves full administrative details for a specific quote.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/admin/quotes/{id}
Update quote details (Admin)
Updates an existing quote's details before or after issuance.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateQuoteAdminDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Quote updated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/quotes/{id}
Delete quote
Permanent removal of a quote record.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "204": {"description": "Quote deleted"}}

### POST /api/v1/admin/quotes/{id}/duplicate
Duplicate quote
Pass targetRequestId to copy onto an existing request. Without it, creates orphan DRAFT request (legacy — prefer POST /admin/requests/:id/quotes/prefill).
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/DuplicateQuoteDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Quote duplicated successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/admin/quotes/{id}/revise
Create quote revision
Generates a new version (revision) based on an existing quote.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateQuoteAdminDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Quote revision created successfully", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/quotes/{id}/history
Get quote history
Retrieves the complete version and interaction history of a specific quote.
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/quotes/{id}/documents/versions
List quote document versions (admin)

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/quotes/{id}/extend
Extend quote validity

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/quotes/{id}/pdf
Get quote PDF metadata (Admin)
Retrieves a metadata-rich link or status for the quote document (Admin view).
Pass `?regenerate=true` to force a new document version (NL-QUOTE-003).
Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}, {"name": "regenerate", "required": false, "in": "query", "description": "When true, always create a new PDF version", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/quotes/{id}/contract
Download signed contract PDF (Admin)

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/quotes/{id}/documents/versions
List quote document versions

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/quotes/{id}/contract/preview
Preview draft service agreement PDF before acceptance

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/quotes/{id}/contract
Download signed contract PDF

Parameters: [{"name": "id", "required": true, "in": "path", "description": "Quote UUID", "schema": {"type": "string"}}]
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "AcceptQuoteDto": {
      "type": "object",
      "properties": {
        "acceptTerms": {
          "type": "boolean",
          "description": "Confirmed agreement to the terms and conditions",
          "example": true
        },
        "signatureName": {
          "type": "string",
          "maxLength": 100,
          "description": "Full legal name for electronic signature",
          "example": "John Doe"
        },
        "signatureDate": {
          "type": "string",
          "description": "Timestamp of the electronic signature",
          "example": "2024-12-31T23:59:59Z"
        },
        "notes": {
          "type": "string",
          "maxLength": 1000,
          "description": "Additional notes or requirements upon acceptance",
          "example": "Looking forward to working together!"
        }
      },
      "required": [
        "acceptTerms",
        "signatureName",
        "signatureDate"
      ]
    },
    "DeclineQuoteDto": {
      "type": "object",
      "properties": {
        "reason": {
          "type": "string",
          "enum": [
            "budgetConstraints",
            "timelineIssues",
            "scopeDiscrepancy",
            "other"
          ],
          "description": "Categorized reason for declining the quote",
          "example": "budgetConstraints"
        },
        "feedback": {
          "type": "string",
          "maxLength": 1000,
          "description": "Detailed qualitative feedback for the decline action",
          "example": "The budget is higher than our quarterly allocation."
        },
        "requestRevision": {
          "type": "boolean",
          "description": "Whether the client wants to keep the negotiation open by requesting a revised quote",
          "example": true
        }
      },
      "required": [
        "reason",
        "requestRevision"
      ]
    },
    "ChangeItemDto": {
      "type": "object",
      "properties": {
        "area": {
          "type": "string",
          "maxLength": 50,
          "description": "Specific area of the quote requiring adjustment",
          "example": "budget",
          "enum": [
            "budget",
            "timeline",
            "features",
            "terms"
          ]
        },
        "request": {
          "type": "string",
          "maxLength": 500,
          "description": "Detailed description of the requested modification",
          "example": "Reduce the total budget by 10% by removing the logo design service."
        }
      },
      "required": [
        "area",
        "request"
      ]
    },
    "RequestQuoteChangesDto": {
      "type": "object",
      "properties": {
        "changes": {
          "description": "List of specific points of negotiation or concern",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/ChangeItemDto"
          }
        },
        "additionalNotes": {
          "type": "string",
          "maxLength": 2000,
          "description": "Any additional context or summary for the requested changes",
          "example": "We are generally happy with the proposal but need to adjust the cost."
        }
      },
      "required": [
        "changes"
      ]
    },
    "CreateLineItemBlockDto": {
      "type": "object",
      "properties": {
        "slug": {
          "type": "string",
          "maxLength": 80,
          "example": "custom-api-integration"
        },
        "label": {
          "type": "string",
          "maxLength": 120,
          "example": "Custom API Integration"
        },
        "description": {
          "type": "string",
          "maxLength": 500,
          "example": "Third-party API integration and webhook handling"
        },
        "category": {
          "type": "string",
          "example": "backend",
          "enum": [
            "discovery",
            "design",
            "frontend",
            "backend",
            "qa",
            "devops",
            "pm"
          ]
        },
        "defaultUnitPrice": {
          "type": "number",
          "minimum": 0,
          "description": "Default unit price in major currency (e.g. rupees)",
          "example": 25000
        },
        "defaultQuantity": {
          "type": "number",
          "minimum": 1,
          "example": 1
        },
        "sortOrder": {
          "type": "number",
          "example": 0
        }
      },
      "required": [
        "slug",
        "label",
        "description",
        "category",
        "defaultUnitPrice"
      ]
    },
    "UpdateLineItemBlockDto": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "maxLength": 120
        },
        "description": {
          "type": "string",
          "maxLength": 500
        },
        "category": {
          "type": "string"
        },
        "defaultUnitPrice": {
          "type": "number",
          "minimum": 0,
          "description": "Default unit price in major currency"
        },
        "defaultQuantity": {
          "type": "number",
          "minimum": 1
        },
        "isActive": {
          "type": "boolean"
        },
        "sortOrder": {
          "type": "number"
        }
      }
    },
    "QuotePaymentBreakdownDto": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "advance",
            "milestone",
            "final",
            "subscription",
            "fullPayment"
          ],
          "description": "The nature of this payment installment",
          "example": "milestone"
        },
        "description": {
          "type": "string",
          "description": "Specific description of what this payment covers",
          "example": "Completion of frontend UI design phase."
        },
        "amount": {
          "type": "number",
          "minimum": 0,
          "description": "Installment amount in paise (smallest currency unit). Same unit as stored quote totals.",
          "example": 250000
        },
        "percentage": {
          "type": "number",
          "minimum": 0,
          "maximum": 100,
          "description": "The percentage of the total project value this installment represents",
          "example": 25
        },
        "dueDate": {
          "type": "string",
          "description": "Expected or deadline date for this payment",
          "example": "2024-12-01T00:00:00Z"
        },
        "deliverables": {
          "description": "List of deliverable titles linked to this payment module",
          "example": [
            "Figma Design Files",
            "Icon Set Assets"
          ],
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "description",
        "amount",
        "percentage",
        "dueDate"
      ]
    },
    "CreateQuoteAdminDto": {
      "type": "object",
      "properties": {
        "requestId": {
          "type": "string",
          "description": "Reference to the project request UUID this quote answers",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "title": {
          "type": "string",
          "maxLength": 200,
          "description": "Descriptive title for the quote proposal",
          "example": "E-commerce Platform Phase 1 Development"
        },
        "description": {
          "type": "string",
          "maxLength": 2000,
          "description": "Extensive textual scope and value proposition description",
          "example": "This quote covers the end-to-end development of the MVP..."
        },
        "totalAmount": {
          "type": "number",
          "minimum": 0,
          "description": "Total quote amount in paise (smallest currency unit). Same unit as stored/returned totals.",
          "example": 1000000
        },
        "currency": {
          "type": "string",
          "maxLength": 3,
          "description": "ISO currency code for the quote",
          "example": "INR"
        },
        "validUntil": {
          "type": "string",
          "description": "Absolute expiration date of the quote validity",
          "example": "2025-01-15T23:59:59Z"
        },
        "validityDays": {
          "type": "number",
          "minimum": 1,
          "description": "Duration in days the quote remains valid from issuance",
          "example": 30
        },
        "paymentBreakdown": {
          "description": "Phased payment schedule and milestones",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/QuotePaymentBreakdownDto"
          }
        },
        "timeline": {
          "type": "object",
          "description": "Structured timeline information (JSON Object)"
        },
        "scope": {
          "type": "object",
          "description": "Detailed project scope definitions (JSON Object)"
        },
        "technicalDetails": {
          "type": "object",
          "description": "Specific technical requirements or stack details (JSON Object)"
        },
        "terms": {
          "type": "string",
          "description": "Specific terms and conditions governing this quote",
          "example": "30% upfront requirement. 3 revision cycles included."
        },
        "notes": {
          "type": "string",
          "description": "Internal or client-facing miscellaneous notes",
          "example": "Special discount applied for long-term partnership."
        },
        "attachments": {
          "description": "Array of media/file UUIDs for documentation or assets linked to the quote",
          "example": [
            "550e8400-e29b-41d4-a716-446655440001"
          ],
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "requestId",
        "title",
        "description",
        "totalAmount",
        "currency",
        "validUntil",
        "paymentBreakdown"
      ]
    },
    "UpdateQuoteLineItemDto": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string",
          "example": "Frontend UI implementation"
        },
        "quantity": {
          "type": "number",
          "minimum": 0,
          "example": 1
        },
        "unitPrice": {
          "type": "number",
          "minimum": 0,
          "example": 2500
        }
      }
    },
    "UpdateQuotePaymentScheduleInstallmentDto": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "description": "Installment label shown to client",
          "example": "Deposit"
        },
        "percentage": {
          "type": "number",
          "minimum": 0,
          "description": "Percentage of quote total (use this OR amount, not both required)",
          "example": 30
        },
        "amount": {
          "type": "number",
          "minimum": 0,
          "description": "Fixed amount in major currency (e.g. rupees). Use when not using percentage.",
          "example": 15000
        },
        "dueTrigger": {
          "type": "string",
          "enum": [
            "on_accept",
            "on_prior_approved",
            "on_date"
          ],
          "description": "When this installment becomes payable",
          "example": "on_accept"
        },
        "dueDate": {
          "type": "string",
          "description": "Due date (required when dueTrigger is on_date)",
          "example": "2025-03-01T00:00:00Z"
        }
      },
      "required": [
        "label"
      ]
    },
    "UpdateQuoteAdminDto": {
      "type": "object",
      "properties": {
        "requestId": {
          "type": "string",
          "description": "Reference to the project request UUID this quote answers",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "title": {
          "type": "string",
          "maxLength": 200,
          "description": "Descriptive title for the quote proposal",
          "example": "E-commerce Platform Phase 1 Development"
        },
        "description": {
          "type": "string",
          "maxLength": 2000,
          "description": "Extensive textual scope and value proposition description",
          "example": "This quote covers the end-to-end development of the MVP..."
        },
        "totalAmount": {
          "type": "number",
          "minimum": 0,
          "description": "Total quote amount in paise (smallest currency unit). Same unit as stored/returned totals.",
          "example": 1000000
        },
        "currency": {
          "type": "string",
          "maxLength": 3,
          "description": "ISO currency code for the quote",
          "example": "INR"
        },
        "validUntil": {
          "type": "string",
          "description": "Absolute expiration date of the quote validity",
          "example": "2025-01-15T23:59:59Z"
        },
        "validityDays": {
          "type": "number",
          "minimum": 1,
          "description": "Duration in days the quote remains valid from issuance",
          "example": 30
        },
        "paymentBreakdown": {
          "description": "Phased payment schedule and milestones",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/QuotePaymentBreakdownDto"
          }
        },
        "timeline": {
          "type": "object",
          "description": "Structured timeline information (JSON Object)"
        },
        "scope": {
          "type": "object",
          "description": "Detailed project scope definitions (JSON Object)"
        },
        "technicalDetails": {
          "type": "object",
          "description": "Specific technical requirements or stack details (JSON Object)"
        },
        "terms": {
          "type": "string",
          "description": "Specific terms and conditions governing this quote",
          "example": "30% upfront requirement. 3 revision cycles included."
        },
        "notes": {
          "type": "string",
          "description": "Internal or client-facing miscellaneous notes",
          "example": "Special discount applied for long-term partnership."
        },
        "attachments": {
          "description": "Array of media/file UUIDs for documentation or assets linked to the quote",
          "example": [
            "550e8400-e29b-41d4-a716-446655440001"
          ],
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "items": {
          "description": "Replace line items (request-style quotes) and recalculate totals",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/UpdateQuoteLineItemDto"
          }
        },
        "taxPercentage": {
          "type": "number",
          "minimum": 0,
          "description": "Tax percentage applied to subtotal",
          "example": 10
        },
        "termsAndConditions": {
          "type": "string",
          "maxLength": 2000,
          "description": "Project-specific terms added on top of the standard Nestlancer terms snapshotted on the quote"
        },
        "internalNotes": {
          "type": "string",
          "maxLength": 1000,
          "description": "Internal notes (admin only)"
        },
        "requiresContract": {
          "type": "boolean",
          "description": "Whether the client must sign the service agreement when accepting the quote",
          "example": true
        },
        "schedulePreset": {
          "type": "string",
          "description": "Built-in payment schedule preset (rebuilds paymentSchedule from quote total)",
          "example": "30-70"
        },
        "paymentSchedule": {
          "description": "Custom payment schedule rows (amounts in major currency or percentages)",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/UpdateQuotePaymentScheduleInstallmentDto"
          }
        }
      }
    },
    "DuplicateQuoteDto": {
      "type": "object",
      "properties": {
        "targetRequestId": {
          "type": "string",
          "description": "When set, copies line items onto this existing request (must not already have a quote). Omit to clone as a new DRAFT request (legacy \u2014 prefer POST /admin/requests/:id/quotes/prefill)."
        },
        "sourceQuoteId": {
          "type": "string",
          "description": "Ignored alias",
          "deprecated": true
        },
        "quoteId": {
          "type": "string",
          "deprecated": true,
          "description": "Ignored alias"
        },
        "duplicateFrom": {
          "type": "string",
          "deprecated": true,
          "description": "Ignored alias"
        },
        "title": {
          "type": "string",
          "deprecated": true,
          "description": "Ignored \u2014 title is copied from source"
        }
      }
    }
  }
}

## messaging.openapi

None

### GET /api/v1/admin/messages
List all platform messages
Administrative view of every message sent between users.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/messages/{id}
Force delete message
Permanently remove a message regardless of authorship.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/messages/stats
Get global messaging stats
Retrieve platform-wide counts of messages and active conversations.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/messages/analytics
Get messaging analytics
Fetch time-series data and engagement metrics for messaging.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/messages/conversations
List all conversations
Administrative view of all active chat threads in the system.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/messages/project/{projectId}
Get project messages
Fetch the entire chat history for a specific project.
Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/messages/{id}/flag
Flag message
Mark a message as potentially violating terms for internal review.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/messages/projects/{projectId}/system
Broadcast system message
Inject an automated system notification into a project chat stream.
Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/messages/flagged
List flagged messages
Retrieve a priority queue of messages that have been identified as potentially violating community standards.
Parameters: [{"name": "userId", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "projectId", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/messages/moderation-history
List moderation history
Audit trail of flagged, escalated, removed, and restored messages for operator review and restore.
Parameters: [{"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "action", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/messages/flagged/{id}/dismiss
Dismiss flagged message
Clear the flagged state without deleting the message.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/messages/flagged/{id}
Remove flagged message from chat
Replace the chat bubble with a moderation notice, keep original text in history for restore.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/messages/flagged/{id}/escalate
Escalate flagged message
Mark for senior review and censor the bubble in chat so participants cannot read it.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/messages/flagged/{id}/restore
Restore moderated message
Restore a removed or escalated message. Optional body.content edits the text before restore.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/conversations
List user conversations
Fetch all chat threads the user is involved in.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/conversations/unread-count
Get unread count
Fetch the cumulative number of messages the user has not yet checked.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/messages/health
Messages service health check
Evaluate the connectivity and performance status of the messaging infrastructure.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/messages/unread-count
Get unread count
Fetch the cumulative number of messages the user has not yet checked.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/messages/search
Search messages
Perform full-text search across messages within a project or for all user chats.
Parameters: [{"name": "q", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/messages/projects/{projectId}
List project messages
Retrieve history of messages for a given project stream.
Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/projects/{projectId}
Send message (project)
Post a new message to a specific project chat stream.
Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateMessageDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/messages/project/{projectId}
List project messages (alias)
Alias for clients that call GET /messages/project/:projectId
Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/project/{projectId}
Send message (project alias)
Alias for clients that call POST /messages/project/:projectId
Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateMessageDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/messages
Send message
Post a new message. Provide exactly one of projectId or threadId in the body.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateMessageDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/messages/project/{projectId}/search
Search project messages
Perform text search restricted to a single project chat.
Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "q", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/messages/{id}
Edit message
Modify the text content of a previously sent message.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateMessageDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/messages/{id}
Delete message
Remove a message from the conversation.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/{id}/read
Mark as read
Indicate that the specified message has been viewed.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/project/{projectId}/read
Mark project messages as read
Mark every unread message in a project chat as seen.
Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/projects/{projectId}/read-all
Mark project messages as read (Alias)
Batch update all messages in a project to read status.
Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/{id}/pin
Pin message
Highlight a message by pinning it to the chat header.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/{id}/unpin
Unpin message
Remove a message from the pinned list.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/{id}/flag
Flag message for moderation
Mark a project, direct, or group message as needing operator review. Visible in the admin moderation queue.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/messages/project/{projectId}/attachments
List attachments
Extract all file attachments from a project message stream.
Parameters: [{"name": "projectId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/messages/{messageId}/thread
Get thread history
Fetch all hierarchical replies for a given message.
Parameters: [{"name": "messageId", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/{messageId}/thread
Send thread reply
Post a reply that is conceptually nested under a parent message.
Parameters: [{"name": "messageId", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateMessageDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/messages/{messageId}/threads
List thread replies
Fetch all messages that were sent in response to the specified parent message.
Parameters: [{"name": "messageId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/{messageId}/threads
Reply in thread

Parameters: [{"name": "messageId", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateMessageDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/messages/threads
List direct and group threads for the current user

Parameters: [{"name": "page", "required": true, "in": "query", "schema": {"type": "string"}}, {"name": "limit", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/threads/direct
Open or resume a direct admin↔client thread
Clients may omit peerUserId to connect with the platform support admin. Admins must supply peerUserId (the client user id).
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/DirectThreadDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### POST /api/v1/messages/threads/group
Create a group thread (admin + multiple clients)

Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/GroupThreadDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### GET /api/v1/messages/threads/{threadId}
Get chat thread details with members

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/messages/threads/{threadId}
Update a group thread (title)

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateChatThreadDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/messages/threads/{threadId}/members
List members of a chat thread

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/threads/{threadId}/members
Add clients to a group thread

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/AddChatThreadMembersDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### DELETE /api/v1/messages/threads/{threadId}/members/{memberUserId}
Remove a client from a group thread

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "memberUserId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/threads/{threadId}/leave
Leave a group thread (clients only)

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### POST /api/v1/messages/threads/{threadId}/archive
Archive a conversation (direct or group)

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### POST /api/v1/messages/threads/{threadId}/unarchive
Restore an archived conversation

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### POST /api/v1/messages/threads/{threadId}/user-archive
Archive a conversation for the current user only

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### POST /api/v1/messages/threads/{threadId}/user-unarchive
Restore a user-archived conversation to the inbox

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### POST /api/v1/messages/threads/{threadId}/user-hide
Delete a conversation from your inbox (admin still has full record)

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### GET /api/v1/messages/threads/{threadId}/messages
List root messages in a chat thread

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}, {"name": "projectId", "required": false, "in": "query", "description": "Filter messages by project ID", "schema": {"type": "string"}}, {"name": "replyToId", "required": false, "in": "query", "description": "Filter messages by parent message thread ID", "schema": {"type": "string"}}, {"name": "search", "required": false, "in": "query", "description": "Search term for message content", "schema": {"type": "string"}}, {"name": "page", "required": false, "in": "query", "description": "Pagination page number", "schema": {"minimum": 1, "default": 1, "example": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "description": "Number of items per page", "schema": {"minimum": 1, "default": 50, "example": 50, "type": "number"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/messages/threads/{threadId}/messages
Send a message in a chat thread

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateMessageDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### POST /api/v1/messages/threads/{threadId}/read
Mark all messages in a thread as read

Parameters: [{"name": "threadId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": ""}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "CreateMessageDto": {
      "type": "object",
      "properties": {
        "projectId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000",
          "description": "Project ID (exactly one of projectId or threadId is required)"
        },
        "threadId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440001",
          "description": "Chat thread ID for direct or group messaging (exactly one of projectId or threadId)"
        },
        "content": {
          "type": "string",
          "maxLength": 5000,
          "example": "Hello, how is the progress?",
          "description": "Text content of the message"
        },
        "replyToId": {
          "type": "string",
          "example": "660f9511-f30c-52e5-b827-557766551111",
          "description": "ID of the message being replied to"
        },
        "mediaId": {
          "type": "string",
          "example": "019e578b-64e6-7578-b70d-7d99a2529658",
          "description": "Media ID for file attachments (requires type FILE)"
        },
        "type": {
          "default": "TEXT",
          "enum": [
            "TEXT",
            "FILE",
            "SYSTEM",
            "NOTIFICATION"
          ],
          "type": "string",
          "description": "Type of the message"
        }
      }
    },
    "UpdateMessageDto": {
      "type": "object",
      "properties": {
        "content": {
          "type": "string",
          "maxLength": 5000,
          "example": "Updated message content",
          "description": "The new content of the message"
        }
      },
      "required": [
        "content"
      ]
    },
    "DirectThreadDto": {
      "type": "object",
      "properties": {
        "peerUserId": {
          "type": "string",
          "description": "The other party (admin or client UUID). Omit for clients to open chat with the platform support admin. Admins must always send this."
        }
      }
    },
    "GroupThreadDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "clientUserIds": {
          "description": "At least two client user ids (USER role)",
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "clientUserIds"
      ]
    },
    "UpdateChatThreadDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        }
      }
    },
    "AddChatThreadMembersDto": {
      "type": "object",
      "properties": {
        "clientUserIds": {
          "description": "Client user ids to add (USER role)",
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "clientUserIds"
      ]
    }
  }
}

## health.openapi

None

### GET /api/v1/health
Get aggregated system health
Monitor the holistic health of the application, including all integrated micro-components.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "503": {"description": "One or more critical components are failed"}}

### GET /api/v1/health/detailed
Get detailed health diagnostics
Access in-depth availability and performance data for all individual subsystems.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/ready
Readiness probe
Checks if the service is ready to serve requests.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/live
Liveness probe
Simple ping to verify the process is running.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### HEAD /api/v1/health/ping
Ping (HEAD)
Minimal connectivity check returns 200 OK.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/ping
Ping (GET)
Minimal connectivity check returns 200 OK.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/database
Database health
Verify connection to the primary database (e.g., PostgreSQL).
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/cache
Cache health
Verify connectivity to the Redis cache cluster.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/queue
Queue health
Check status of background job queues and brokers.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/storage
Storage health
Verify accessibility of the file storage/S3 bucket.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/microservices
Inter-service health
Monitor communication health between internal microservices.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/external
External services health
Check status of 3rd-party integrations (e.g., Payment Gateways, Email).
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/workers
Workers health
Verify that background worker nodes are active.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/websocket
WebSocket health
Monitor the availability of the real-time communications layer.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/system
System metrics
Fetch basic host system metrics like memory and CPU utilization.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/features
Feature flag health
Check status of the dynamic feature toggle service.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/registry
Registry health
Verify connection to the service discovery and registry node.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health/debug
Retrieve system debug logs
Access deep-trace diagnostics and environment metadata for architectural troubleshooting.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    }
  }
}

## webhooks.openapi

None

### GET /api/v1/webhooks/health
Service health check
Confirm that the inbound webhook ingestion microservice is reachable and operational.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/webhooks/razorpay
Receive Razorpay Webhook
Capture and queue financial event notifications from the Razorpay payment provider.
Body: {"required": true, "description": "Raw Razorpay Webhook Body (provider-specific JSON)", "content": {"application/json": {"schema": {"type": "object", "additionalProperties": true}}}}
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/webhooks/cloudflare
Receive Cloudflare Webhook
Ingest infrastructure and security events from the Cloudflare edge platform.
Body: {"required": true, "description": "Raw Cloudflare Webhook Body (provider-specific JSON)", "content": {"application/json": {"schema": {"type": "object", "additionalProperties": true}}}}
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/webhooks/github
Receive GitHub Webhook
Specialized receiver for GitHub platform events.
Body: {"required": true, "description": "Raw GitHub Webhook Body (provider-specific JSON)", "content": {"application/json": {"schema": {"type": "object", "additionalProperties": true}}}}
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/webhooks/stripe
Receive Stripe Webhook
Specialized receiver for Stripe payment platform webhooks.
Body: {"required": true, "description": "Raw Stripe Webhook Body (provider-specific JSON)", "content": {"application/json": {"schema": {"type": "object", "additionalProperties": true}}}}
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/webhooks/{provider}
Receive Dynamic Provider Webhook
Dynamic receiver for arbitrary webhook providers.
Parameters: [{"name": "provider", "required": true, "in": "path", "description": "Internal identifier for the webhook source", "schema": {"type": "string"}}]
Body: {"required": true, "description": "Raw provider webhook body (JSON)", "content": {"application/json": {"schema": {"type": "object", "additionalProperties": true}}}}
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    }
  }
}

## notifications.openapi

None

### GET /api/v1/notifications/preferences
Get notification preferences
Access your personalized settings for how and where you receive notifications.
Security: [{"bearer": []}]
Responses: {"200": {"description": "PreferencesResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/PreferencesResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/notifications/preferences
Update notification preferences
Modify your routing rules and delivery channel status for system notifications.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdatePreferencesDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "PreferencesResponseDto wrapped in the standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"$ref": "#/components/schemas/PreferencesResponseDto"}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/notifications/channels
Get available delivery channels
Retrieves available notification channels.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/notifications/preferences/channels
Get delivery channels (Alias)
Alias for retrieving available delivery channels.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/notifications/preferences/channel/{channel}
Update specific channel preference
Updates preference for a specific delivery channel.
Parameters: [{"name": "channel", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/health
Service health check
Confirm that the notifications microservice is reachable and operational.
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/test
Send test notification
Sends a test notification to the current user.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### GET /api/v1/notifications
Get current user notifications
Fetch all active and unread notifications belonging to your account.
Parameters: [{"name": "page", "required": false, "in": "query", "description": "Page number (default: 1)", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "description": "Items per page (default: 20, max: 100)", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "type", "required": false, "in": "query", "description": "Severity filter (info|success|warning|error). UI tabs all|unread|payments|projects|system are also accepted.", "schema": {"type": "string"}}, {"name": "unreadOnly", "required": false, "in": "query", "description": "If true, only unread notifications are returned", "schema": {"example": true, "type": "boolean"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/notifications/unread-count
Get unread notification count
Retrieve the total number of notifications that have not yet been acknowledged.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/notifications/history
Get notification history
Retrieves historical notifications for the current user.
Parameters: [{"name": "page", "required": false, "in": "query", "description": "Page number (default: 1)", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "description": "Items per page (default: 20, max: 100)", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "type", "required": false, "in": "query", "description": "Severity filter (info|success|warning|error). UI tabs all|unread|payments|projects|system are also accepted.", "schema": {"type": "string"}}, {"name": "unreadOnly", "required": false, "in": "query", "description": "If true, only unread notifications are returned", "schema": {"example": true, "type": "boolean"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/notifications/{id}
Get a single notification
Retrieves a specific notification by ID.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/notifications/{id}
Soft delete a notification
Soft-deletes a specific notification.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/notifications/{id}/read
Mark a notification as read
Marks a specific notification as read.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/MarkReadDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### PATCH /api/v1/notifications/{id}/unread
Mark a notification as unread
Marks a specific notification as unread.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/notifications/read-all
Mark all notifications as read
Marks all user notifications as read.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/notifications/read-selected
Mark selected notifications as read
Marks selected notifications as read.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/MarkSelectedReadDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/notifications/clear-read
Clear all read notifications
Clears all read notifications from the user's view.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/notifications
Get all notifications (Admin)
Access the global repository of notification records for audit and review.
Parameters: [{"name": "page", "required": false, "in": "query", "description": "Page number (default: 1)", "schema": {"minimum": 1, "default": 1, "type": "number"}}, {"name": "limit", "required": false, "in": "query", "description": "Items per page (default: 20, max: 100)", "schema": {"minimum": 1, "maximum": 100, "default": 20, "type": "number"}}, {"name": "pageSize", "required": false, "in": "query", "description": "Alias of limit", "schema": {"minimum": 1, "maximum": 100, "type": "number"}}, {"name": "sort", "required": false, "in": "query", "description": "Sort field:order (e.g., createdAt:desc)", "schema": {"type": "string"}}, {"name": "type", "required": false, "in": "query", "description": "Severity filter (info|success|warning|error). UI tabs all|unread|payments|projects|system are also accepted.", "schema": {"type": "string"}}, {"name": "unreadOnly", "required": false, "in": "query", "description": "If true, only unread notifications are returned", "schema": {"example": true, "type": "boolean"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/notifications/stats
Get notification statistics
Monitor high-level notification volume and status distribution platform-wide.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/notifications/delivery-report
Get delivery report
Retrieves a delivery report for a specific notification.
Parameters: [{"name": "notificationId", "required": true, "in": "query", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/notifications/send
Send targeted notification
Sends a targeted notification to specific recipients.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/SendNotificationDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "Notification sent successfully"}}

### POST /api/v1/admin/notifications/broadcast
Broadcast notification to all users
Broadcasts a notification to all active users.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/BroadcastNotificationDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/notifications/segment
Send notification to segment
Sends a notification to a specific user segment based on criteria.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/SegmentNotificationDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### DELETE /api/v1/admin/notifications/user/{userId}
Clear notifications for a user
Clears all notifications for a specific user.
Parameters: [{"name": "userId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/notifications/{id}/resend
Resend a notification
Resends a specific notification.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### GET /api/v1/admin/notifications/templates
Get all notification templates
Access the library of predefined notification structures and content.
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/admin/notifications/templates
Create a new template
Define and save a new blueprint for automated notifications.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/CreateNotificationTemplateDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "Template created successfully"}}

### PATCH /api/v1/admin/notifications/templates/{id}
Update a template
Updates an existing notification template.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/UpdateNotificationTemplateDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/admin/notifications/templates/{id}
Delete a template
Deletes a notification template.
Parameters: [{"name": "id", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/push-subscription
Register web push subscription
Enroll a device for receiving real-time browser push notifications.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RegisterPushSubscriptionDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### DELETE /api/v1/push-subscription
Remove web push subscription
Deactivate and delete a previously registered push notification endpoint.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RemoveSubscriptionDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### POST /api/v1/internal/notifications/trigger
Trigger an internal notification (inter-service)
Triggers a notification from another microservice.
Useful for synchronous event-based notifications.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/SendNotificationDto"}}}}
Security: []
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}, "201": {"description": "", "content": {"application/json": {"schema": {"type": "object"}}}}}

### POST /api/v1/push/register
Register push device token
Registers a device token for push notifications.
Body: {"required": true, "content": {"application/json": {"schema": {"$ref": "#/components/schemas/RegisterDeviceDto"}}}}
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### DELETE /api/v1/push/unregister/{deviceId}
Unregister push device
Unregisters a device from push notifications.
Parameters: [{"name": "deviceId", "required": true, "in": "path", "schema": {"type": "string"}}]
Security: [{"bearer": []}]
Responses: {"200": {"description": "Standard success envelope", "content": {"application/json": {"schema": {"allOf": [{"$ref": "#/components/schemas/ApiSuccessEnvelopeDto"}, {"type": "object", "required": ["status", "data", "metadata"], "properties": {"status": {"type": "string", "enum": ["success"]}, "data": {"type": "object", "additionalProperties": true}, "metadata": {"$ref": "#/components/schemas/ResponseMetadataDto"}}}]}}}}}

### All schemas
{
  "securitySchemes": {
    "bearer": {
      "scheme": "bearer",
      "bearerFormat": "JWT",
      "type": "http"
    }
  },
  "schemas": {
    "ResponseMetadataDto": {
      "type": "object",
      "properties": {
        "timestamp": {
          "type": "string",
          "example": "2026-05-29T12:00:00.000Z"
        },
        "requestId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "version": {
          "type": "string",
          "example": "v1"
        },
        "path": {
          "type": "string",
          "example": "/api/v1/users/me"
        }
      },
      "required": [
        "timestamp",
        "requestId",
        "version"
      ]
    },
    "ApiSuccessEnvelopeDto": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "success"
          ],
          "example": "success"
        },
        "data": {
          "type": "object",
          "description": "Business payload returned by the controller handler",
          "additionalProperties": true
        },
        "metadata": {
          "$ref": "#/components/schemas/ResponseMetadataDto"
        }
      },
      "required": [
        "status",
        "data",
        "metadata"
      ]
    },
    "PreferencesResponseDto": {
      "type": "object",
      "properties": {
        "userId": {
          "type": "string",
          "example": "550e8400-e29b-41d4-a716-446655440000",
          "description": "User ID"
        },
        "preferences": {
          "type": "object",
          "description": "Channel-specific preference settings"
        },
        "quietHours": {
          "type": "object",
          "description": "Quiet hours configuration"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string",
          "example": "2026-03-08T10:00:00Z",
          "description": "When preferences were last updated"
        }
      },
      "required": [
        "userId",
        "preferences",
        "quietHours",
        "updatedAt"
      ]
    },
    "ChannelPreferencesDto": {
      "type": "object",
      "properties": {
        "email": {
          "type": "boolean",
          "example": true,
          "description": "Enable/disable email notifications"
        },
        "push": {
          "type": "boolean",
          "example": true,
          "description": "Enable/disable push notifications"
        },
        "inApp": {
          "type": "boolean",
          "example": true,
          "description": "Enable/disable in-app notifications"
        }
      },
      "required": [
        "email",
        "push",
        "inApp"
      ]
    },
    "QuietHoursDto": {
      "type": "object",
      "properties": {
        "start": {
          "type": "string",
          "nullable": true,
          "example": "22:00",
          "description": "Start time of quiet hours (HH:mm)"
        },
        "end": {
          "type": "string",
          "nullable": true,
          "example": "08:00",
          "description": "End time of quiet hours (HH:mm)"
        },
        "timezone": {
          "type": "string",
          "nullable": true,
          "example": "Asia/Kolkata",
          "description": "IANA timezone used to evaluate quiet-hours start/end"
        }
      }
    },
    "UpdatePreferencesDto": {
      "type": "object",
      "properties": {
        "preferences": {
          "type": "object",
          "description": "Map of category names to channel preferences",
          "additionalProperties": {
            "$ref": "#/components/schemas/ChannelPreferencesDto"
          }
        },
        "channels": {
          "type": "object",
          "description": "Alias for preferences (same shape as GET quietHours sibling channels map)",
          "additionalProperties": {
            "$ref": "#/components/schemas/ChannelPreferencesDto"
          }
        },
        "quietHours": {
          "description": "Quiet hours settings. Null start/end (as returned by GET) clears quiet hours.",
          "allOf": [
            {
              "$ref": "#/components/schemas/QuietHoursDto"
            }
          ]
        },
        "userId": {
          "type": "string",
          "description": "Allowed when clients PATCH the GET body back (NL-BUG-MSG-002)."
        },
        "updatedAt": {
          "type": "string"
        }
      }
    },
    "MarkReadDto": {
      "type": "object",
      "properties": {
        "read": {
          "type": "boolean",
          "default": true,
          "example": true,
          "description": "The read status to set"
        },
        "isRead": {
          "type": "boolean",
          "description": "Alias of `read`. Clients that bind the response field `isRead` may send this."
        }
      }
    },
    "MarkSelectedReadDto": {
      "type": "object",
      "properties": {
        "notificationIds": {
          "example": [
            "550e8400-e29b-41d4-a716-446655440000"
          ],
          "description": "List of notification IDs to mark as read",
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "notificationIds"
      ]
    },
    "SendNotificationDto": {
      "type": "object",
      "properties": {
        "recipientIds": {
          "example": [
            "550e8400-e29b-41d4-a716-446655440000"
          ],
          "description": "List of recipient user IDs",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "title": {
          "type": "string",
          "maxLength": 200,
          "example": "New Message",
          "description": "Brief title of the notification"
        },
        "message": {
          "type": "string",
          "maxLength": 2000,
          "example": "You have received a new message from John Doe.",
          "description": "The main content/body of the notification"
        },
        "type": {
          "type": "string",
          "description": "Categorical type of the notification (free-form string, e.g. \"system.e2e\")"
        },
        "channels": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "IN_APP",
              "PUSH",
              "EMAIL"
            ]
          },
          "description": "Delivery channels to use"
        },
        "scheduledFor": {
          "type": "string",
          "example": "2026-03-10T10:00:00Z",
          "description": "Scheduled time for future delivery"
        }
      },
      "required": [
        "recipientIds",
        "title",
        "message"
      ]
    },
    "BroadcastNotificationDto": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "example": "System Maintenance",
          "description": "Title of the broadcast notification"
        },
        "message": {
          "type": "string",
          "example": "The system will be down for maintenance at midnight.",
          "description": "Main content of the broadcast"
        },
        "excludeUserIds": {
          "example": [
            "550e8400-e29b-41d4-a716-446655440001"
          ],
          "description": "Users to exclude from this broadcast",
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "channels": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "IN_APP",
              "PUSH",
              "EMAIL"
            ]
          },
          "description": "Specific delivery channels"
        },
        "scheduledFor": {
          "type": "string",
          "example": "2026-03-10T00:00:00Z",
          "description": "When to trigger the broadcast"
        }
      },
      "required": [
        "title",
        "message"
      ]
    },
    "SegmentDateRangeDto": {
      "type": "object",
      "properties": {
        "start": {
          "type": "string",
          "example": "2024-01-01",
          "description": "Inclusive start date (ISO 8601 calendar date)"
        },
        "end": {
          "type": "string",
          "example": "2024-12-31",
          "description": "Inclusive end date (ISO 8601 calendar date)"
        }
      }
    },
    "SegmentCriteriaDto": {
      "type": "object",
      "properties": {
        "role": {
          "type": "string",
          "example": "USER",
          "description": "Target users by their role (USER or ADMIN)"
        },
        "dateRange": {
          "description": "Target users based on registration or activity date",
          "allOf": [
            {
              "$ref": "#/components/schemas/SegmentDateRangeDto"
            }
          ]
        },
        "activity": {
          "type": "string",
          "description": "Target users by specific activity patterns"
        }
      }
    },
    "SegmentNotificationDto": {
      "type": "object",
      "properties": {
        "criteria": {
          "description": "Segmentation rules",
          "allOf": [
            {
              "$ref": "#/components/schemas/SegmentCriteriaDto"
            }
          ]
        },
        "notificationPayload": {
          "type": "object",
          "description": "The notification content and metadata"
        }
      },
      "required": [
        "criteria",
        "notificationPayload"
      ]
    },
    "CreateNotificationTemplateDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 120,
          "example": "welcome_email",
          "description": "Unique name identifier for the template"
        },
        "eventType": {
          "type": "string",
          "example": "request.submitted",
          "description": "The event type that triggers this template"
        },
        "titleTemplate": {
          "type": "string",
          "maxLength": 200,
          "example": "New request submitted"
        },
        "messageTemplate": {
          "type": "string",
          "example": "{{submitterName}} submitted \"{{requestTitle}}\"."
        },
        "channels": {
          "type": "object",
          "description": "Channel list (e.g. [\"IN_APP\"]) or legacy channels object",
          "additionalProperties": true,
          "example": {
            "IN_APP": true
          }
        },
        "priority": {
          "type": "string",
          "example": "NORMAL",
          "enum": [
            "LOW",
            "NORMAL",
            "HIGH",
            "URGENT"
          ]
        },
        "isActive": {
          "type": "boolean",
          "example": true
        }
      },
      "required": [
        "name",
        "eventType"
      ]
    },
    "UpdateNotificationTemplateDto": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 120,
          "example": "welcome_email",
          "description": "Unique name identifier for the template"
        },
        "eventType": {
          "type": "string",
          "example": "request.submitted",
          "description": "The event type that triggers this template"
        },
        "titleTemplate": {
          "type": "string",
          "maxLength": 200,
          "example": "New request submitted"
        },
        "messageTemplate": {
          "type": "string",
          "example": "{{submitterName}} submitted \"{{requestTitle}}\"."
        },
        "channels": {
          "type": "object",
          "description": "Channel list (e.g. [\"IN_APP\"]) or legacy channels object",
          "additionalProperties": true,
          "example": {
            "IN_APP": true
          }
        },
        "priority": {
          "type": "string",
          "example": "NORMAL",
          "enum": [
            "LOW",
            "NORMAL",
            "HIGH",
            "URGENT"
          ]
        },
        "isActive": {
          "type": "boolean",
          "example": true
        }
      }
    },
    "PushSubscriptionKeysDto": {
      "type": "object",
      "properties": {
        "p256dh": {
          "type": "string",
          "description": "The p256dh key for push subscription"
        },
        "auth": {
          "type": "string",
          "description": "The auth secret for push subscription"
        }
      },
      "required": [
        "p256dh",
        "auth"
      ]
    },
    "RegisterPushSubscriptionDto": {
      "type": "object",
      "properties": {
        "endpoint": {
          "type": "string",
          "example": "https://fcm.googleapis.com/fcm/send/...",
          "description": "The push service endpoint"
        },
        "keys": {
          "description": "Encryption keys for the subscription",
          "allOf": [
            {
              "$ref": "#/components/schemas/PushSubscriptionKeysDto"
            }
          ]
        },
        "deviceInfo": {
          "type": "string",
          "example": "Chrome on Windows",
          "description": "User-friendly name or identifier for the device"
        }
      },
      "required": [
        "endpoint",
        "keys"
      ]
    },
    "RemoveSubscriptionDto": {
      "type": "object",
      "properties": {
        "endpoint": {
          "type": "string",
          "description": "The endpoint URL of the push subscription to remove"
        }
      },
      "required": [
        "endpoint"
      ]
    },
    "RegisterDeviceDto": {
      "type": "object",
      "properties": {
        "token": {
          "type": "string",
          "example": "fcm_token_123"
        },
        "deviceId": {
          "type": "string",
          "example": "device_abc"
        },
        "platform": {
          "type": "string",
          "example": "android"
        }
      },
      "required": [
        "token",
        "deviceId",
        "platform"
      ]
    }
  }
}

