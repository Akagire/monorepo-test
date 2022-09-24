### Lab Notebook

- Yarn workspaces
- Next.js
- Express

### 1. create repository

```sh
mkdir monorepo-test
cd monorepo-test
yarn init -y
mkdir packages/frontend
```

### 2. install Next.js to `packages/frontend`

```sh
npx create-next-app --typescript packages/frontend @monorepo-test/frontend
```

### 3. clean up frontend package

```sh
cd packages/frontend
rm -rf .git node_modules yarn.lock
```

### 4. yarn workspace startup test

```sh
cd ../../ # => its projects root directory
yarn
yarn workspace @monorepo-test/frontend run dev
```

### 5. add backend service package that uses `express`

```sh
mkdir packages/backend
cd packages/backend
yarn init -y # => and rename name to `@monorepo-test/backend`
```

### 6. install `express`

```sh
cd ../../ # => its projects root directory
yarn workspace @monorepo-test/backend add express@latest --exact
```

### 7. create endpoint `app.js`

cf) https://expressjs.com/ja/starter/hello-world.html

- packages/backend/package.json
```json
  "scripts": {
    "dev": "node app.js"
  }
```

- package.json
```json
  "scripts": {
    "dev:frontend": "yarn workspace @monorepo-test/frontend run dev",
    "dev:backend": "yarn workspace @monorepo-test/backend run dev" // <= add
  }
```
