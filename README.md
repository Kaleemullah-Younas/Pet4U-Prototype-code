# Pet4U - Animal Adoption Management System

Pet4U is a comprehensive web application designed to streamline the animal adoption process, connecting animals with loving homes while managing the entire adoption lifecycle.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Troubleshooting](#troubleshooting)
- [Step-by-Step Guide to Run Pet4U Locally](#step-by-step-guide-to-run-pet4u-locally)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.0.0 or later)
- npm (v8.0.0 or later) or [Yarn](https://yarnpkg.com/) (v1.22.0 or later)
- Git

## Installation

Follow these steps to set up the project locally:

```bash
npm install
# or
# yarn install
```

## Environment Variables

Create a `.env.local` file in the root directory and configure as needed:

```ini
# Example environment variables
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Running the Application

### Development Server

```bash
npm run dev
# or
# yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
# or
# yarn build
``` 

Start the production server:

```bash
npm run start
# or
# yarn start
```

## Project Structure

The project follows the Next.js App Router structure:

```plaintext
pet4u/
├── app/                  # App Router pages and layouts
│   ├── admin/            # Admin role pages
│   ├── adopter/          # Adopter role pages
│   ├── auth/             # Authentication pages
│   ├── donor/            # Donor role pages
│   ├── staff/            # Staff role pages
│   ├── vet/              # Veterinarian role pages
│   ├── volunteer/        # Volunteer role pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── ui/               # UI components (shadcn/ui)
│   └── ...               # Other components
├── lib/                  # Utility functions and libraries
├── public/               # Static assets
└── ...                   # Configuration files
```

## Features

Pet4U includes role-based dashboards for:

- **Adopters**: Browse animals, submit applications, track status
- **Staff**: Manage animals, applications, appointments, inventory
- **Administrators**: User management, system settings, logs
- **Volunteers**: Schedule management, hour logging, availability
- **Donors**: Donation history, communication, sponsorships
- **Veterinarians**: Medical records, appointments, treatments

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation

## Troubleshooting

### Common Issues

#### "Cannot read properties of undefined (reading '_names')"

This error typically occurs with form components. Ensure:

1. You've properly set up react-hook-form with your shadcn/ui Form components
2. Each `FormField` has a proper `control` prop: `control={form.control}`
3. Your form schema matches your form fields

#### Page Not Found (404)

If you encounter 404 errors:

1. Check that the file exists in the correct location in the `app` directory
2. Ensure the file is properly exported as a React component
3. Restart the development server

#### Styling Issues

If styles aren't applying correctly:

1. Make sure Tailwind CSS is properly configured
2. Check for conflicting class names
3. Verify that `globals.css` is imported in the root layout

### Still Having Issues?

1. Check the console for error messages
2. Verify all dependencies are installed correctly
3. Try clearing your browser cache
4. Ensure you're using compatible Node.js and npm/yarn versions

## Step-by-Step Guide to Run Pet4U Locally

1. **Install Node.js and npm**
   - Download and install from [nodejs.org](https://nodejs.org/)
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```

2. **Clone the repository (Not uploaded yet)**

   ```bash
   git clone https://github.com/yourusername/pet4u.git
   cd pet4u
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Access the application**

   1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
   2. You'll see the Pet4U homepage

6. **Navigate the application**

   - Use the login page to access different role dashboards
   - For development, you can directly access role pages:
     - `/admin` - Administrator dashboard
     - `/staff` - Staff dashboard
     - `/adopter` - Adopter dashboard
     - `/volunteer` - Volunteer dashboard
     - `/donor` - Donor dashboard
     - `/vet` - Veterinarian dashboard

7. **Make changes**

   - Edit files in the `app` directory to modify pages
   - Edit components in the `components` directory
   - Changes will automatically refresh in the browser

8. **Build for production**

   ```bash
   npm run build
   npm run start
   ```

## License

[MIT](LICENSE)
