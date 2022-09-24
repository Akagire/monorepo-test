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
cd ../../ # => its project directory
yarn
yarn workspace @monorepo-test/frontend run dev
```

