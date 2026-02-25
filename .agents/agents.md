# react-collapsable - Agent Guide

This is the agent-facing guide for working in this repository.

## Project Context
- A Collapsable React Component

## Setup
See [`agents.yaml`](./agents.yaml) for prerequisites, commands, and ports.

### Setup Hints
- `nvm` may not be loaded in your shell. If `nvm: command not found`, source it first.
- `yarn storybook` runs in the foreground — background it the same way.

## Running the App
- Clone the repo
- Install: `yarn install`
- Dev: `yarn storybook &`
- Access: `http://localhost:6006`

## Architecture
- React component library with Storybook
- Uses Emotion for styling
- Entry point: `src/index.js`

## Working Agreement
- Write modular code
- Keep testable
- Incremental validation
- Commit meaningful checkpoints
- Write tests
- Validate before handoff
