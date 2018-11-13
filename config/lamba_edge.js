// Node.js 6.10 Lambda @ Edge
// Adds security headers to static site hosted in CloudFront (response.pagerduty.com)
// https://aws.amazon.com/blogs/networking-and-content-delivery/adding-http-security-headers-using-lambdaedge-and-amazon-cloudfront/

'use strict';
exports.handler = (event, context, callback) => {
    // Get contents of response
    const response = event.Records[0].cf.response;
    const headers = response.headers;

    // Set new headers
    headers['strict-transport-security'] = [{key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains'}];
    headers['content-security-policy'] = [{key: 'Content-Security-Policy', value: "default-src 'none'; script-src 'self' ssl.google-analytics.com www.google-analytics.com 'sha256-eYhPAan8tismgcBYfKrO53dlKH/Rle4T2+t9+Z1HmhI=' 'sha256-fX9qfHwuLRAhhgRM/UaGciy4GcC8DMLAacNFMsVHnk8=' 'sha256-uOd5osRJnClKPYJOS4wmC1p4NrBa6oXf7wcdjoCJi4E=' 'sha256-7Fg4GpuMuR+NrX8/ahfEhTdcVf2kc8QCq8rAy2fn6dw='; object-src 'self'; style-src 'self' 'sha256-LpfmXS+4ZtL2uPRZgkoR29Ghbxcfime/CsD/4w5VujE=' 'sha256-nK6A3vwzvwoN92MnHZrWtylYkYmW1jCQgTqWKQJNBMI=' 'sha256-QVPYhFew7P3p46DxC68MMy/iAdzPaXWHAFcS3O2A0tI='; img-src 'self' data: ssl.google-analytics.com www.google-analytics.com; media-src 'none'; frame-src www.youtube.com www.youtube-nocookie.com; font-src 'self'; connect-src 'self' api.github.com; base-uri 'none'; form-action 'self'; frame-ancestors 'none'"}];
    headers['x-content-type-options'] = [{key: 'X-Content-Type-Options', value: 'nosniff'}];
    headers['x-frame-options'] = [{key: 'X-Frame-Options', value: 'DENY'}];
    headers['x-xss-protection'] = [{key: 'X-XSS-Protection', value: '1; mode=block'}];
    headers['referrer-policy'] = [{key: 'Referrer-Policy', value: 'same-origin'}];
    headers['feature-policy'] = [{key: 'Feature-Policy', value: "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'"}]

    // Return modified response
    callback(null, response);
};
