import Dexie from 'dexie';

export const db = new Dexie('MyDatabase');

// Define tables and indexes
// ++id means auto-incrementing primary key
db.version(1).stores({
  tasks: '++id, title, status',    // Table 1: For your To-Do items
  users: '++id, email, username',  // Table 2: For user profiles
  settings: 'key'                  // Table 3: For app configuration
});