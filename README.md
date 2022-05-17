# API key regex

This repository contains a Javascript function with a regex to validate Ably API keys.

## Ably API key format

Ably API keys have the following format: `<appId>.<keyId>:<keySecret>`, where

 - `<appId>` 6 base64 characters,
 - `<keyId>` 6 base64 characters,
 - `<keySecret>` is either 16 or 43 base64 characters.