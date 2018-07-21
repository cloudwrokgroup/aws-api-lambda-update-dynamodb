module.exports = (isCors, body, requestedCode) => {
    const code = requestedCode || (body ? 200 : 204);
    const headers = isCors ? {
        'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,PUT',
        'Access-Control-Allow-Origin': process.env.CORS_ORIGIN,
        'Access-Control-Max-Age': '86400',
        'Content-Type': 'application/json'
    } : { 'Content-Type': 'application/json' };
    return {
        statusCode: code,
        body: JSON.stringify(body) || '',
        headers: headers
    };
};