# Code Editor app

### Deploy on Vercel

https://task-code-editor.vercel.app/

## App description

The Code Editor App has next features:

- support 3 programming languages (Javascript, Go, Python3)
- adaptive and responsive for mobile devices

<div align="center">
<img src="./public/readme.png" alt="screenshots app" width="100%"/>
</div>
<br>

## Stack:

- React + TS
- Vite
- Sass

### Using Public Api

#### [Piston](https://github.com/engineer-man/piston?tab=readme-ov-file#public-api)

```bash
GET  https://emkc.org/api/v2/piston/runtimes
POST https://emkc.org/api/v2/piston/execute
```

## Installation and Running

1. Clone the repository

```bash
git clone https://github.com/Svetk0/task-code-editor.git
```

2. Move to project folder

```bash
cd task-code-editor
```

3. Install all dependencies from `package.json`

```bash
npm install
```

4. Run the project

- Run only Front

```bash
npm run dev
```

- Run Front and Back (Mock Server) simultaneously (server will be run on the port 7001)

```bash
npm run fullstack
```

5. Check the local host on the port 7000 <br>

```bash
http://localhost:7000/
```

## Upgrade Suggestions

1. Tips block should be updated according to Task block (relevant subjects and topics that need to solve the task)
2. Add more languages
