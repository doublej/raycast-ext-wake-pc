# Wake PC

Raycast extension to send a Wake-on-LAN magic packet to wake your PC.

## Features

- Send WOL magic packet with a single command
- MAC address configured via Raycast preferences

## Commands

| Command | Description |
|---------|-------------|
| Wake PC | Send magic packet to wake PC |

## Preferences

| Name | Description | Required |
|------|-------------|----------|
| MAC Address | MAC address of the PC to wake | Yes |

## Prerequisites

- `wakeonlan` must be installed (`brew install wakeonlan`)

## Install

```bash
bun install
bun run build
bun run dev
```

## License

MIT
