// Ably API keys are like <appId>.<keyId>:<keySecret>, where <appId and <keyId> are always 6 base64 characters, 
// and <keySecret> is either 16 or 43 base64 characters (i.e. the secret is either 12 raw bytes or 32 raw bytes in size).

function validateAblyApiKey(apiKey) {
    const apiRegex = new RegExp('^[\\w-]{6}\\.[\\w-]{6}:(?:[\\w-]{16}|[\\w-]{43})$');
    return apiRegex.test(apiKey);
}

module.exports = validateAblyApiKey;