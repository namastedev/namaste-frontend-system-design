# Network Protocols

Network protocols have 7 layers which are Application, Presentation, Session, Transport, Network, Data Link, and Physical. Each layer serves a specific function in the process of data communication over a network. Most important are the Application, and Traport layers.

## Application Layer:

- Application layer is divided into 2 parts which is client server protocol and peer to peer protocol.
- Client server protocol is a communication model where a client requests services and resources from a server. The server processes the request and sends back the appropriate response. Examples of client-server protocols include HTTP, FTP, SMTp and websockets.
- Peer to peer protocol is a communication model where each device on the network can act as both a client and a server. In this model, devices can directly communicate with each other without the need for a central server. Examples of peer-to-peer is webRTC.

## Why webRTC is fast?

- WebRTC is fast because it allows for direct peer-to-peer communication between devices, reducing the need for intermediaries and minimizing latency.
- WebRTC uses UDP (User Datagram Protocol) for data transmission, which is faster than TCP (Transmission Control Protocol) because it does not require the overhead of establishing a connection and ensuring reliable delivery.
- WebRTC is used for real-time communication applications such as video conferencing, online gaming, and live streaming, where low latency is critical for a smooth user experience.
