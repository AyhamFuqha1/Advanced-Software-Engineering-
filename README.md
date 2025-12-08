HealthPal – Digital Healthcare Platform

HealthPal is a digital healthcare management platform designed to enhance communication between patients, doctors, donors, NGOs, volunteers, and therapy groups.
The system supports donations, health alerts, workshops, reservations, anonymous therapy chats, inventory management, medical missions, and translation services.

=============================================================================================================================================================================================================

1. Used Technologies & Tools
Backend:
NestJS (Node.js + TypeScript)
TypeORM
MySQL Database
JWT Authentication


External APIs:
Disease.sh API → real-time global & country-specific health alerts
LibreTranslate API → translate medical terms & general text


Tools:
GitHub
VSCode
Postman
Draw.io

=============================================================================================================================================================================================================

2. System Architecture

The system follows a modular layered architecture:
Controller Layer       → handles incoming HTTP requests
Service Layer          → business logic
Repository Layer       → database operations using TypeORM
DTO + Validation Layer → class-validator
Auth Layer             → JWT, Guards
External API Layer     → WHO health data, translation API

Why this architecture?
Scalable
Highly maintainable
Easy to add new modules
Clean separation of concerns

=============================================================================================================================================================================================================

3. Database Schema (ERD)

The ERD includes all system components:
Doctors, Patients
Donors, Donations
NGOs, Medical Missions
Workshops, Reservations
Inventory Management
Anonymous Therapy Chats
Health Alerts
Translation Module


The ERD image is stored in the repo under:
/docs/reprt_finsh.drawio.png

(You can embed it in README using →
![ERD](./docs/reprt_finsh.drawio.png))

=============================================================================================================================================================================================================

4. URI Structure (Main Endpoints)
Authentication:
POST /login

Patients:
POST /patients
GET  /patients
GET  /patients/:id
PATCH /patients/:id
DELETE /patients/:id

Patient Reservations:
POST /patients/:id/reservation

Patient Request Medicine:
POST /patients/:id/requestMedicine
POST /patients/requestMedicine      ← anonymous therapy chat inside patients

Doctors:
POST /doctor
GET  /doctor
GET  /doctor/:id
PATCH /doctor/:id
DELETE /doctor/:id

Donors:
POST /donors
GET  /donors
GET  /donors/:id
PATCH /donors/:id
DELETE /donors/:id

Donation Requests:
POST /don-req
GET  /don-req
GET  /don-req/:id
PATCH /don-req/:id
DELETE /don-req/:id
GET /don-req/dashboard/:id        ← donor dashboard

Medical NGOs:
POST /medical-ngos
GET  /medical-ngos
GET  /medical-ngos/:id
PATCH /medical-ngos/:id
DELETE /medical-ngos/:id

Reservations:
POST /reservations
GET  /reservations
GET  /reservations/:id
PATCH /reservations/:id
DELETE /reservations/:id

Anonymous Therapy Chats:
POST /anonymous-therapy-chats
GET  /anonymous-therapy-chats
GET  /anonymous-therapy-chats/:id
DELETE /anonymous-therapy-chats/:id

Health Alerts (External API Integration):
GET  /health-alerts/external                  ← fetch WHO data only
POST /health-alerts/sync/:medical_id/:country ← fetch + store WHO data

Translation:
POST /translation/medical

{full list in Wiki + Postman Collection.}

=============================================================================================================================================================================================================

5. External API Integrations
1) Disease.sh API – WHO Health Data
Used to fetch:
Cases
Deaths
Recoveries
Tests
Active cases
Country info

Custom endpoint created:
POST /health-alerts/sync/:medical_id/:country

=============================================================================================================================================================================================================

6. GitHub Repository Structure
src/
 ├── auth
 ├── doctors
 ├── patients
 ├── donations
 ├── medical-ngos
 ├── health_alerts
 ├── translation
 ├── inventory
 ├── reservations
 ├── anonymous_therapy_chats
 └── ...

docs/
 └── reprt_finsh.drawio.png

=============================================================================================================================================================================================================

7. Problem-Solving Approach

The system solves the following issues:
Lack of centralized medical coordination
Difficulty organizing donations and NGOs
Need for multilingual medical communication
Need for real-time global health tracking

Our approach:
Modular design
Smart integrations
Secure authentication
Real-time alert syncing
Organized data relationships (ERD)

=============================================================================================================================================================================================================

8. Wiki Documentation
The Wiki includes:
Architecture explanation
ERD
List of features
Endpoints (mapped to Postman numbers)
Module descriptions
How each feature works

Wiki Link: (منضيفو هون بس نعملو)

=============================================================================================================================================================================================================

9. Running the Project
Install dependencies:
yarn install

Run in development mode:
yarn start:dev

Environment Variables:
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=momoali2003(It depends on who is activating and each member and their device.)
DB_NAME=healthpal

=============================================================================================================================================================================================================

Team Members:
Mahmoud Yaseen
Ayham Fuqaha
Abdelfattah Al-Malak

Demo Video:
(upload the video to Google Drive later)

Notes:
Endpoints fully documented in Postman
External APIs tested successfully
ERD uploaded in docs folder
