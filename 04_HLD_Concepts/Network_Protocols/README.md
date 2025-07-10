# Network Protocols

Network protocols are basically a set of rules and conventions for communication between network devices. They define how data is transmitted, formatted, and processed across a network. Understanding these protocols is crucial for designing and implementing networked systems.

There are two types of Network Models that we can use to understand how data is transmitted over the network:

1. **OSI Model**: The OSI (Open Systems Interconnection) model is a conceptual framework that is based on the functionality of each layer to enable communication over a network. These layers are:

   - Application Layer - provides network services to end-user applications
   - Presentation Layer - translates data between the application layer and the network
   - Session Layer - manages sessions and controls dialogues between computers
   - Transport Layer - ensures reliable data transfer and error recovery
   - Network Layer - handles routing and forwarding of packets across the network
   - Data Link Layer - responsible for node-to-node data transfer and error detection/correction
   - Physical Layer - includes the real hardware and transmission media (like cables, switches, etc.)

2. **TCP/IP Model**: The TCP/IP (Transmission Control Protocol/Internet Protocol) model is a more simplified and practical framework that combines the functionalities of the OSI model into fewer layers and is protocol-oriented. It consists of four layers:

   - Application Layer (Application, Presentation, Session (OSI)) - provides network services to end-user applications
   - Transport Layer (Transport layer (OSI)) - ensures reliable data transfer and error recovery
   - Internet Layer (Network (OSI)) - manages the routing of data packets across networks
   - Link Layer (Data Link, Physical (OSI)) - handles the physical and logical connections between devices

### Common Network Protocols

- **TCP (Transmission Control Protocol)**: TCP protocol is a connection-oriented protocol that ensures an established connection between the devices before data transmission. It guarantees the delivery of data packets in the correct order and without errors using the same path, making it suitable for applications that require reliable communication, such as web browsing and file transfers.

- **UDP (User Datagram Protocol)**: UDP is a connectionless protocol that allows sending data over different paths without establishing a connection. So the overhead is lower compared to TCP, making it a faster but less reliable option. The devices need to handle any errors, lost packets, or out-of-order delivery. It is commonly used in applications like video streaming, online gaming, and voice over IP (VoIP), where speed is more critical than reliability.

- **HTTP (Hypertext Transfer Protocol)**: The HTTP protocol is an application layer protocol used for transmitting hypertext (web pages) over the Internet. It is a request-response protocol where a client (usually a web browser) sends a request to a server, and the server responds with the requested resource. HTTP is stateless, meaning each request is independent of previous requests. It works over TCP and is the foundation of data communication on the World Wide Web.

- **HTTPS (HTTP Secure)**: An extension of HTTP that adds a layer of security using SSL/TLS encryption. It ensures secure communication over the internet, protecting data from eavesdropping and tampering using encryption and certificates. HTTPS is now the standard across the web for secure data transmission, and all websites use HTTPS to protect user data and privacy.

- **WebSocket**: Websocket is a protocol that establishes a persistent, full-duplex channel between a client and a server over a single TCP connection. It allows real-time communication by enabling the server to push data to the client and vice versa without the need for repeated HTTP requests. WebSockets are commonly used in applications that require real-time updates, such as chat applications, online gaming, and live notifications.

- **FTP (File Transfer Protocol)**: A standard network protocol used for transferring files between a client and a server. It supports both anonymous and authenticated access and can operate in active or passive mode. It has two connections: a control connection for commands and a data connection for transferring files. FTP is commonly used for uploading and downloading files to/from web servers. However, as it is not secure, it is often replaced by more secure protocols like SFTP or FTPS.

- **SFTP (SSH File Transfer Protocol)**: A secure version of FTP that uses SSH (Secure Shell) to encrypt the data being transferred. It provides a secure channel for file transfers over a network, ensuring the confidentiality and integrity of the data. SFTP is commonly used for secure file transfers in environments where security is a priority like in web hosting, cloud storage, and remote file management.

- **FTPS (FTP Secure)**: An extension of FTP that adds support for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols to encrypt the data being transferred. It provides secure file transfer capabilities while maintaining compatibility with existing FTP clients and servers. FTPS is often used in scenarios where secure file transfers are required, such as in financial institutions or healthcare systems.

- **SSH (Secure Shell)**: A cryptographic network protocol used for secure remote access and management of network devices and servers. It provides a secure channel over an unsecured network, allowing users to log in to remote systems, execute commands, and transfer files securely. SSH is widely used for system administration, remote server management, and secure file transfers.

- **SMTP (Simple Mail Transfer Protocol)**: SMTP is used for sending the emails from the user to an Email server. It is responsible for the delivery of email from the sender's server to the recipient's server. It works on top of TCP and is used with IMAP or POP3 for retrieving emails. SMTP is a text-based protocol that allows users to send emails with attachments and supports features like authentication and encryption.

- **IMAP (Internet Message Access Protocol)**: A protocol used by email clients to retrieve and manage email messages stored on a mail server. It allows users to access their emails from multiple devices while keeping them synchronized. IMAP maintains the email on the server, enabling users to organize and manage their messages without downloading them.

- **POP3 (Post Office Protocol version 3)**: A protocol used by email clients to retrieve email messages from a mail server. Unlike IMAP, POP3 downloads emails to the client and typically removes them from the server, making it less suitable for accessing emails from multiple devices.

- **WebRTC (Web Real-Time Communication)**: WebRTC is a suite of APIs & protocols responsible for enabling real-time communication over UDP. It is a collection of protocols and APIs that allow audio, video, and data sharing between browsers and mobile applications without the need for plugins or additional software. WebRTC is commonly used in applications like video conferencing, voice calls, and real-time data sharing.
