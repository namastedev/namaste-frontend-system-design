#!/bin/bash
openssl req  -nodes -new -x509  \
    -keyout ./cert/server.key \
    -out ./cert/server.cert \
    -subj "/C=US/ST=State/L=City/O=company/OU=Com/CN=www.testserver.local"