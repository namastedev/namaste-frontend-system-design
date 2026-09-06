<h1>Backend System Design :</h1>
<h2>
  <a href="https://www.geeksforgeeks.org/system-design/system-design-tutorial/">
    Backend System Design
  </a>
</h2>
<h3>System Design Introduction - LLD & HLD</h3>
<ul>
  <li>Netflix transitioned their entire backend from a monolith to microservices (starting with encoding and UI services), completing the migration by 2011 to scale rapidly during high-load events like holiday seasons.</li>
  <li>Uber adopted an event-driven architecture where ride requests, location updates, and fare changes emit events that trigger real-time systems like driver matching, billing, and dynamic pricing.</li>
  <li>Twitter deployed a load-balanced architecture with caching of trending topics and tweets to quickly serve millions of users and handle real-time data flows efficiently.</li>
</ul>
<h6>Important points to consider when designing a software system:</h6>
<ul>
  <li><b>Scalability : </b>The system should be designed to handle increased loads and be able to scale horizontally or vertically as needed.</li>
  <li>
    <b>Performance : </b>The system should be designed to perform efficiently and effectively, with minimal latency and response time.
  </li>
  <li>
    <b>Reliability : </b>The system should be reliable and available, with minimal downtime or system failures.
  </li>
  <li>
    <b>Security : </b>The system should be designed with security in mind, including measures to prevent unauthorized access and protect sensitive data.
  </li>
  <li>
    <b>Maintainability : </b>The system should be designed to be easy to maintain and update, with clear documentation and well-organized code.
  </li>
  <li>
    <b>Cost-effectiveness : </b>The system should be designed to be cost-effective, with consideration for infrastructure and operational costs.
  </li>
</ul>
<h3>Functional and Non Functional Requirements</h3>
<h6>Functional Requirements</h6>
<ul>
  <li>Requirements that describe the specific features</li>
  <li>They focus on what the system should do and outline the interactions between the system and its users.</li>
  <li>Typical examples include user authentication, data entry and processing, search functionality, payment handling, and report generation.</li>
</ul>
<h6>Non-Functional Requirements</h6>
<ul>
  <li>Performance</li>
  <li>Scalability</li>
  <li>Reliability</li>
  <li>Security</li>
  <li>Maintainability</li>
  <li>Usability</li>
  <li>Portability</li>
  <li></li>
</ul>
<h2>System Architectural Styles</h2>
<h3>Monolithic Architecture - System Design</h3>
<ul>
  <li>Monolithic architecture is a software design methodology that combines all of an application's components into a single, inseparable unit.</li>
  <li>Under this architecture, the user interface, business logic, and data access layers are all created, put into use, and maintained as one, unified unit.</li>
  <li>
    Generally, avoid monolithic architecture for large applications because it can lead to challenges in scalability, maintainability, and deployment.
  </li>
</ul>
<h3>Microservices Architecture - System Design</h3>
<ul>
  <li>Microservices are an architectural approach to developing software applications as a collection of small, independent services that communicate with each other over a network.</li>
  <li>Can be written in a variety of programming languages, and frameworks, and each service acts as a mini-application on its own</li>
  <li>Each microservice handles a particular business feature, like user authentication or product management, allowing for specialized development.</li>
  <li>Different technologies can be used for each service, enabling teams to select the best tools for their needs.</li>
  <li>Microservices can be updated independently, reducing risks during changes and enhancing system resilience.</li>
  <li>Sometimes each microservice can have separate database also which is even more performant.</li>
</ul>
<h6>Benefits of Using Microservices Architecture</h6>
<ul>
  <li>Teams can work on different microservices simultaneously.</li>
  <li>Issues in one service do not impact others, enhancing reliability.</li>
  <li>Each service can be scaled based on its specific needs.</li>
  <li>Teams can choose the best tech stack for each microservice.</li>
</ul>
<h6>Main components of Microservices Architecture</h6>
<ul>
  <li><b>Microservices : </b>Small, loosely coupled services that handle specific business functions, each focusing on a distinct capability.</li>
  <li><b>API Gateway : </b>A single entry point that manages and routes requests to the appropriate microservices, handling tasks like authentication and rate limiting.</li>
  <li>
    <b>Load Balancer : </b>Distributes incoming network traffic across multiple microservice instances to ensure no single service is overwhelmed, enhancing performance and reliability.
  </li>
  <li>
    <b>Databases per Microservices : </b>Each microservice usually has its own database, promoting data autonomy and allowing for independent management and scaling.
  </li>
  <li>
    <b>Caching : </b>Improves performance by storing frequently accessed data in memory, reducing the need for repeated database queries.
  </li>
  <li>
    <b>Fault Tolerance : </b>Mechanisms like circuit breakers and retries that help the system continue functioning even when some services fail.
  </li>
</ul>
<h3>Event-Driven Architecture - System Design</h3>
<ul>
  <li>Event-driven architecture (EDA) is a software design pattern where the flow of the program is determined by events such as user actions, sensor outputs, or messages from other programs or services.</li>
  <li>In EDA, components communicate by producing and consuming events, allowing for asynchronous processing and decoupling of services.</li>
  <li>Common components include event producers (which generate events), event consumers (which process events), and an event bus or message broker (which routes events between producers and consumers).</li>
  <li>EDA is particularly useful for applications that require real-time processing, scalability, and flexibility, such as IoT systems, financial services, and online retail platforms.</li>
</ul>
<h6>Use Cases of Event-Driven Architecture(EDA)</h6>
<ul>
  <li>
    <b>Real-Time Data Processing : </b>Applications that require immediate processing of data, such as fraud detection systems in banking or real-time analytics platforms.
  </li>
  <li>
    <b>IoT Systems : </b>Internet of Things applications where devices generate events that need to be processed and acted upon, such as smart home systems or industrial monitoring.
  </li>
  <li>
    <b>E-commerce : </b>Online retail platforms that handle events like user actions, inventory updates, and payment processing to provide a seamless shopping experience.
  </li>
</ul>
<h3>Serverless Architecture - System Design</h3>
<ul>
  <li>Serverless architecture is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers.</li>
  <li>In this model, developers can focus on writing code without worrying about server management, as the cloud provider handles infrastructure concerns like scaling, patching, and maintenance.</li>
  <li>Serverless applications are typically built using Functions as a Service (FaaS) platforms, such as AWS Lambda, Azure Functions, or Google Cloud Functions, where individual functions are triggered by events.</li>
  <li>Serverless architecture is ideal for applications with variable workloads, as it allows for automatic scaling based on demand and can lead to cost savings since users only pay for the compute time they consume.</li>
  <li>Automatic Scaling: Serverless platforms automatically scale the execution units (functions) based on the incoming request or event rate.</li>
  <li>
    Cold Starts: The initial invocation of a serverless function may experience latency due to the time taken to provision the necessary resources. When the function is invoked after a period of inactivity, it may take longer to respond which is known as a "cold start."
  </li>
</ul>
<h6>Benefits of Serverless Architecture</h6>
<ul>
  <li>No server management required, allowing developers to focus on code.</li>
  <li>Automatic scaling based on demand.</li>
  <li>Cost-effective, as users only pay for the compute time they consume.</li>
</ul>
<h6>Use case of Serverless Architecture</h6>
<ul>
  <li>
    <b>Chatbots : </b>Serverless functions can handle user interactions and process messages in real-time.
  </li>
  <li>
    <b>Real-Time Data Processing : </b>Serverless functions can be triggered by events such as file uploads or database changes to process and transform data.
  </li>
  <li>
    <b>Web Applications : </b>Serverless functions can be used to handle backend logic for web applications, such as user authentication and data processing.
  </li>
  <li>
    <b>Scheduled Tasks and Cron Jobs : </b>Serverless functions can be scheduled to run at specific intervals to perform routine maintenance tasks, data backups, or report generation.
  </li>
</ul>
<h6>Challenges of Serverless Architecture</h6>
<ul>
  <li>
    Cold Starts: Serverless functions may experience latency when they're invoked for the first time or after being idle for a period, known as "cold starts," impacting response times for accessed functions.
  </li>
  <li>
    State Management: Serverless functions are stateless by nature, making it challenging to manage stateful applications that require persistent data across multiple function invocations.
  </li>
</ul>
<h2>Stateful vs. Stateless Architecture</h2>
<h6>
  Stateful Architecture
</h6>
<ul>
  <li>
    The server maintains the state or session information of each client. This means that the server keeps track of the client's data and context throughout multiple interactions or requests.
  </li>
</ul>
<li>
  Mostly we use Stateless architecture in modern applications because it is easier to scale and maintain.
</li>
<h2>What is Pub/Sub Architecture?</h2>
<li>
  Pub/Sub (Publish/Subscribe) is a messaging pattern where senders (publishers) send messages without knowing who will receive them, and receivers (subscribers) express interest in specific types of messages without knowing who sent them.
</li>
<h6>
  Components of Pub/Sub Architecture :
</h6>
<ul>
  <li>
    Publisher: The component that sends messages to a topic without knowledge of the subscribers.
  </li>
  <li>
    Subscriber: The component that receives messages from a topic based on its interest, without knowledge of the publishers.
  </li>
  <li>
    Topic: A named channel to which publishers send messages and from which subscribers receive messages.
  </li>
  <li>
    Message Broker: An intermediary that manages the distribution of messages from publishers to subscribers, ensuring decoupling and scalability.
  </li>
</ul>
<h6>
  How Pub/Sub Works :
</h6>
<ul>
  <li>
    Publishers send messages to a topic without knowing who the subscribers are.
  </li>
  <li>
    Subscribers express interest in specific topics and receive messages related to those topics.
  </li>
  <li>
    The message broker handles the routing of messages from publishers to the appropriate subscribers based on their subscriptions.
  </li>
</ul>
<h2>Real world example of different Architecture</h2>
<li>Microservice architecture are used by Netflix and Uber</li>
<li>Event-driven architecture are used by Amazon. For example, when an item is purchased, events are generated for inventory update, order processing, shipping, and payment. These events trigger actions across the system asynchronously.</li>
<li>Serverless architecture are used by Coca-Cola. For example, Coca-Cola uses AWS Lambda to handle backend processes for their vending machines, allowing for real-time inventory management and payment processing without managing servers.</li>
<li>Pub/Sub architecture are used by Google Cloud Pub/Sub and Slack. For example, Google Cloud Pub/Sub is used in applications like real-time analytics and IoT data processing, where messages are published to topics and multiple subscribers can process the data independently.</li>
<h2>Horizontal and Vertical Scaling | System Design</h2>
<h6>Vertical Scaling</h6>
<ul>
  <li>Vertical scaling, also known as scaling up, refers to the process of increasing the capacity or capabilities of an individual hardware or software component within a system.</li>
  <li>We upgrade the same system rather than adding more systems. Add more power to your machine by adding better processors, increasing RAM, or other power-increasing adjustments.</li>
</ul>
<h6>Horizontal Scaling</h6>
<ul>
  <li>Horizontal scaling, also known as scaling out, refers to the process of adding more machines or instances to a system to increase its overall capacity and performance.</li>
  <li>We add more systems rather than upgrading the same system. Add more machines to your pool of resources to distribute the load and handle increased traffic or demand.</li>
  <li>Amazon Auto Scaling spins up more EC2 instances during peak shopping hours (e.g., Black Friday).</li>
</ul>
<h6>Advantages of Horizontal Scaling</h6>
<ul>
  <li>Increased capacity: More nodes or instances can handle a larger number of incoming requests.</li>
  <li>Fault tolerance: If one node fails, others can take over, improving system reliability.</li>
  <li>Improved performance: By distributing the load over several nodes or instances, it is less likely that any one server will get overloaded.</li>
</ul>
<li>
  Horizontal Scaling requires Load balancer so that traffic can be distributed evenly across multiple servers.
</li>
<h6>Difference between Horizontal and Vertical Scaling</h6>
<ul>
  <li>Load balancer is required in horizontal scaling but not in vertical scaling.</li>
  <li>Horizontal scaling is Resilient and Fault tolerant because if one node fails, others can take over. Vertical scaling is not fault tolerant because if the single machine fails, the entire system goes down.</li>
  <li>Horizontal scaling is little slow since it requires network communication between multiple nodes. Vertical scaling is faster since it is a single machine.</li>
  <li>Horizontal scaling can have Data consistency issues since multiple nodes are involved. Vertical scaling does not have data consistency issues since it is a single machine.</li>
<ul>
<h2>SQL vs. NoSQL - Which Database to Choose in System Design?</h2>
<h6>SQL Databases</h6>
<ul>
  <li>Tabular Data Model: SQL databases organize records into tables with rows and columns.</li>
  <li>Schema-Based: SQL databases require a predefined schema that defines the structure of the data.</li>
  <li>ACID Compliance: SQL databases adhere to ACID properties (Atomicity, Consistency, Isolation, Durability) to ensure reliable transactions.</li>
  <li>Examples of SQL Databases: MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server.</li>
  <li>SQL database can scale vertically but it's tough to scale horizontally.</li>
  <li>
    Why horizontal scaling is tough in SQL databases? Because SQL follows ACID properties which ensures data consistency. So, when we have multiple nodes, it becomes difficult to maintain data consistency across all nodes. Having multiple nodes can be not reliable and it can lead to data loss and it won't follow ACID properties. SQL queries often involve complex joins across multiple tables, if those tables are stored on different nodes, it can lead to increased latency and reduced performance.
  </li>
</ul>
<h6>When should you choose SQL database over NoSQL database in System Design?</h6>
<ul>
  <li>Complex Queries: If your application requires complex queries, joins, and transactions, SQL databases are a better fit.</li>
  <li>Structured Data: If your data is highly structured and relationships between entities are well-defined, SQL databases provide a robust solution.</li>
  <li>Data Integrity: If maintaining data integrity and consistency is crucial for your application, SQL databases with ACID compliance are preferable.</li>
  <li>Banking & Inventory Management :  Ensures accuracy when transferring funds or updating inventory.</li>
  <li>E-commerce for like customer, orders etc.</li>
  <li>CRM Systems :  Manages customer relationships and interactions.</li>
</ul>
<h6>No-SQL Databases</h6>
<ul>
  <li>Flexible Data Model: NoSQL databases can store unstructured, semi-structured, or structured data in various formats like key-value pairs, documents, graphs, or wide-column stores.</li>
  <li>Schema-less: NoSQL databases do not require a predefined schema, allowing for dynamic and evolving data structures.</li>
  <li>Eventual Consistency: Many NoSQL databases prioritize availability and partition tolerance over immediate consistency, leading to eventual consistency models.</li>
  <li>Examples of NoSQL Databases: MongoDB (Document), Cassandra (Wide-Column), Redis (Key-Value), Neo4j (Graph).</li>
  <li>NoSQL database can scale horizontally very easily.</li>
  <li>
    It follows BASE properties (Basically Available, Soft state, Eventual consistency) instead of ACID properties.
  </li>
</ul>
<h6>When should you choose NoSQL database over SQL database in System Design?</h6>
<ul>
  <li>Scalability: If your application needs to handle large volumes of data and high traffic loads, NoSQL databases are designed for horizontal scaling.</li>
  <li>Flexible Schema: If your data model is evolving or if you need to store diverse data types, NoSQL databases offer greater flexibility.</li>
  <li>High Throughput: If your application requires fast read and write operations, NoSQL databases can provide better performance for certain workloads.</li>
  <li>Real-Time Analytics :  Processes large volumes of data quickly for insights.</li>
  <li>Content Management Systems :  Manages diverse content types and formats.</li>
  <li>Social Media & Big Data Platforms :  Handling unstructured user-generated content at scale. Code submissions on GeeksforGeeks Practice.</li>
</ul>
<h6>Types of No-SQL Databases</h6>
<ul>
  <li>Document Databases (e.g., MongoDB, CouchDB) : When you have variable data fields that change over time (e.g., a user profile).Real-time data management in e-commerce, content management, and social media.</li>
  <li>Key-Value Stores (e.g., Redis, DynamoDB) : When you need fast access of data by key (e.g. caching), or Session Management in Web Apps: When users log in to a website, their session data (like authentication tokens or preferences) is stored in a key-value store (e.g., Redis) for quick access during their browsing session.</li>
  <li>Wide-Column Stores (e.g., Cassandra, HBase) : Columnar databases store data in columns instead of rows. This allows for faster reading of large datasets that only need to access certain columns at a time. Used for analytics kind of thing on particular row.</li>
  <li>Graph Databases (e.g., Neo4j, Amazon Neptune) : Graph databases are optimized for storing and querying data with complex relationships. They represent data as nodes (entities) and edges (relationships between entities). Social Networks (e.g., Facebook, LinkedIn): Graph databases can model relationships between users, posts, comments, and likes in an efficient way. Traversing the graph (e.g., finding friends of friends) is much faster in a graph database than in a relational database.</li>
</ul>
<h2>Database Replication in System Design</h2>
<ul>
  <li>Database replication is the process of copying and maintaining database objects, such as tables, in multiple database servers to ensure data availability, fault tolerance, and improved performance.</li>
  <li>Replication can be synchronous or asynchronous. In synchronous replication, changes are immediately copied to the replica, ensuring data consistency but potentially increasing latency. In asynchronous replication, changes are copied after a delay, which can improve performance but may lead to temporary inconsistencies.</li>
  <li>Common replication strategies include master-slave (one primary server with multiple read-only replicas), multi-master (multiple servers that can handle both read and write operations), and peer-to-peer (all servers are equal and can handle read and write operations).</li>
  <li>Database replication is widely used in distributed systems, cloud computing, and high-availability applications to ensure data durability and accessibility across different geographic locations.</li>
</ul>
<h6>Benefits of Database Replication</h6>
<ul>
  <li>Improved Data Availability: Replication ensures that data is available even if one server fails.</li>
  <li>Enhanced Performance: Read operations can be distributed across multiple replicas, reducing the load on the primary server.</li>
  <li>Disaster Recovery: Replication provides a backup of data that can be used for recovery in case of data loss or corruption.</li>
  <li>Geographical Distribution: Replicas can be placed in different geographic locations to reduce latency for users in those regions.</li>
</ul>
<h6>Challenges of Database Replication</h6>
<ul>
  <li>Data Consistency: Ensuring that all replicas have the same data can be challenging, especially in asynchronous replication.</li>
  <li>Increased Complexity: Managing multiple database servers and ensuring they are synchronized adds complexity to the system.</li>
</ul>
<h2>Database Sharding in System Design</h2>
<ul>
  <li>Database sharding is a technique used to horizontally partition a large database into smaller, more manageable pieces called shards. Each shard is a separate database that contains a subset of the overall data.</li>
  <li>Sharding is typically done based on a specific key, such as user ID or geographic location, which determines how data is distributed across the shards.</li>
  <li>Sharding helps improve performance and scalability by distributing the load across multiple servers, allowing for parallel processing of queries and reducing contention for resources.</li>
  <li>Sharding is commonly used in large-scale applications, such as social media platforms and e-commerce sites, where the volume of data and traffic can be significant.</li>
</ul>
<h6>Methods of Sharding</h6>
<ul>
  <li>Range-Based Sharding: Data is divided into ranges based on a specific key. For example, users with IDs 1-1000 might be stored in one shard, while users with IDs 1001-2000 are stored in another.</li>
  <li>Hash-Based Sharding: A hash function is applied to the sharding key to determine which shard the data belongs to. This method helps distribute data more evenly across shards. Think like a modulo of 3, so it will split keys 4,5,6 into 1,2,0 shards</li>
  <li>
    Vertical Sharding: We split the entire column from the table and we put those columns into new distinct tables. Data is totally independent of one partition to the other ones. Also, each partition holds both distinct rows and columns. We can split different features of an entity in different shards on different machines.
  </li>
</ul>
<h2>Introduction to Database Normalization</h2>
<ul>
  <li>Database normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. The goal of normalization is to ensure that each piece of data is stored in only one place, making it easier to maintain and update.</li>
  <li>Normalization can help improve database performance by reducing the amount of data that needs to be stored and processed. It can also make it easier to query and analyze data, as well as reduce the risk of data inconsistencies and errors.</li>
  <li>However, over-normalization can lead to complex queries and slower performance, so it's important to strike a balance between normalization and denormalization based on the specific needs of the application.</li>
  <li>
    Example : In a customer database, instead of storing the customer's address in multiple tables (e.g., orders, invoices, shipping), we can create a separate address table and link it to the customer table using a foreign key. This way, if the customer's address changes, we only need to update it in one place. In simple way split the tables to avoid redundancy.
  </li>
</ul>
<h2>Query Optimizations</h2>
<ul>
  <li>Indexing: Creating indexes on frequently queried columns can significantly speed up data retrieval by allowing the database to quickly locate the relevant rows.</li>
  <li>Indexing in a database is like the index in a book. In a book, if you want to find all the pages where "Machine Learning" is mentioned, you don’t read every page. Instead, you go to the index section at the back, look up "Machine Learning," and it tells you exactly which pages to check.</li>
  <li>
    Indexing is implemented using data structures like B-trees or hash tables, which allow for efficient searching and sorting of data. But in simple way you can think like a dictionary where words are indexed alphabetically to allow quick lookup or Binary Search on a sorted array.
  </li>
  <li>Caching: Storing frequently accessed query results in memory can reduce the need for repeated database queries, improving performance.</li>
  <li>Partitioning: Dividing large tables into smaller, more manageable pieces (partitions) can improve query performance by reducing the amount of data scanned.</li>
</ul>
<h2>Redis Introduction</h2>
<ul>
  <li>Redis (Remote Dictionary Server) is an open-source, in-memory data structure store that can be used as a database, cache, and message broker.</li>
  <li>
    You can think of Redis as a highly efficient, super-fast dictionary that lives in your computer's memory (RAM) instead of on a hard drive. This allows it to retrieve and store data extremely quickly, making it ideal for applications that require rapid access to information.
  </li>
</ul>
<h6>How Redis Cache works</h6>
<ul>
  <li>When a client asks for data, the API Gateway forwards the request to Redis.</li>
  <li>If Redis has the data (cache hit), it returns it quickly through the API Gateway to the client.</li>
  <li>If Redis doesn't have the data (cache miss), the API Gateway fetches it from the main database, stores a copy in Redis for future requests, and then returns it to the client.</li>
</ul>
<h2>Availability in System Design</h2>
<ul>
  <li>Availability refers to the ability of a system or service to remain operational and accessible to users when needed. It is often measured as a percentage of uptime over a specific period.</li>
  <li>Uptime: The total time a system is operational and functioning as expected.</li>
  <li>Downtime: The total time the system is unavailable due to failures, maintenance, or other issues.</li>
  <li>High availability is achieved through various strategies, including redundancy (having multiple instances of critical components), failover mechanisms (automatic switching to a backup system in case of failure), and load balancing (distributing traffic across multiple servers to prevent overload).</li>
</ul>
<h2>Consistency in System Design</h2>
<ul>
  <li>Consistency refers to the property of a distributed system where all nodes or replicas see the same data at the same time. In other words, when a user reads data from the system, they should always get the most up-to-date and accurate information.</li>
  <li>Strong Consistency: This type guarantees that every read operation receives the most recent write operation's value or an error. It ensures that all clients see the same sequence of updates and that updates appear to be instantaneous. Achieving strong consistency often requires coordination and synchronization between distributed nodes, which can impact system performance and availability.</li>
  <li>A traditional SQL database system with a single master node and multiple replicas ensures strong consistency. When a client writes data to the master node, subsequent reads from any replica will immediately reflect the latest value written. All replicas are updated synchronously, ensuring that all clients see a consistent view of the data.</li>
  <li>Eventual Consistency: This guarantees that data replicas will eventually converge to the same value even while it permits them to diverge briefly. It improves availability and performance in distributed systems by loosening the consistency requirements. Even though it could result in short-term inconsistencies, eventual consistency ensures that all modifications will eventually be shared and balanced.</li>
  <li>Amazon's DynamoDB, a distributed NoSQL database, provides eventual consistency. When data is written to DynamoDB, it is initially stored locally on a single node and then asynchronously propagated to other nodes in the system. While clients may read slightly outdated values immediately after a write, all replicas eventually converge to the same value over time.</li>
  <li>
    Casual Consistency: This model ensures that if one operation happens before another, all nodes will see the first operation before the second. It maintains a logical order of operations without requiring immediate synchronization across all nodes.
  </li>
  <li>A collaborative document editing application, where users can concurrently make edits to different sections of a document, requires causal consistency. If user A makes an edit that depends on the content written by user B, all users should observe these edits in the correct causal order. This ensures that the document remains coherent and maintains the intended meaning across all users.</li>
  <li>Choosing between strong and eventual consistency often involves trade-offs with availability and partition tolerance, as described by the CAP theorem.</li>
</ul>
<h2>Consistency Patterns</h2>
<h6>Strong Consistency Patterns</h6>
<ul>
  <li>
    Two-Phase Commit (2PC): A distributed algorithm that ensures all nodes in a transaction either commit or abort the transaction, maintaining strong consistency across the system.
  </li>
  <li>This pattern employs a locking mechanism to ensure that only one transaction can access a piece of data at a time. It guarantees that transactions are executed in a serializable order, maintaining strong consistency across the system</li>
</ul>
<h6>Eventual Consistency Patterns</h6>
<ul>
  <li>Read Repair: A technique where inconsistencies are detected during read operations and corrected by updating the out-of-date replicas with the most recent data.</li>
  <li>
    In this pattern, when a write operation occurs, the system immediately acknowledges the write to the client and then propagates the changes to other replicas asynchronously. This allows for high availability and low latency, but it may lead to temporary inconsistencies until all replicas are updated.
  </li>
</ul>
<h6>Causal Consistency Patterns</h6>
<ul>
  <li>Vector Clocks: A mechanism that tracks the causal relationships between different versions of data, allowing the system to determine the order of operations and maintain causal consistency.</li>
  <li>
    In this pattern, each operation is tagged with a unique identifier and a timestamp. When operations are propagated to other nodes, the system uses these tags to ensure that operations are applied in a causally consistent order.
  </li>
</ul>
<li>Financial Transactions: Strong consistency patterns are crucial for financial systems where accurate and up-to-date data is essential to ensure transactions are processed correctly and account balances are accurate.</li>
<li>E-commerce Platforms: In online shopping platforms, strong consistency ensures that inventory levels are accurately maintained across multiple warehouses, preventing overselling of products.</li>
<li>Social Media Platforms: Eventual consistency patterns are often used in social media platforms to handle high volumes of data updates, ensuring that users' posts and interactions eventually propagate to all followers' timelines without immediate synchronization.</li>
<li>Collaborative Editing Tools: Weak consistency patterns, such as eventual consistency and conflict resolution mechanisms, are employed in collaborative editing tools like Google Docs, allowing multiple users to concurrently edit documents with eventual synchronization.</li>
<h2>CAP Theorem in System Design</h2>
<ul>
  <li>The CAP theorem, also known as Brewer's theorem, states that in a distributed data store, it is impossible to simultaneously achieve all three of the following guarantees: Consistency, Availability, and Partition Tolerance.</li>
  <li>Consistency (C): Every read receives the most recent write or an error. This means that all nodes in the system see the same data at the same time.</li>
  <li>Availability (A): Every request receives a response, without guarantee that it contains the most recent write. This means that the system is always available to respond to requests, even if some nodes are down.</li>
  <li>Partition Tolerance (P): The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes. This means that the system can handle network failures and continue to function.</li>
  <li>According to the CAP theorem, a distributed system can only guarantee two of these three properties at any given time. For example, a system can be consistent and available but not partition tolerant, or it can be available and partition tolerant but not consistent.</li>
  <li>The CAP theorem is important for designing distributed systems because it helps developers understand the trade-offs involved in choosing which properties to prioritize based on their specific use case and requirements.</li>
</ul>
<h6>Examples of CAP Theorem Trade-offs</h6>
<ul>
  <li>CP (Consistency and Partition Tolerance): Systems like HBase and MongoDB prioritize consistency and partition tolerance, ensuring that data remains consistent across nodes even in the presence of network partitions. However, they may sacrifice availability during such partitions.</li>
  <li>AP (Availability and Partition Tolerance): Systems like Cassandra and DynamoDB prioritize availability and partition tolerance, allowing the system to remain operational even during network partitions. However, they may sacrifice consistency, leading to eventual consistency models.</li>
  <li>CA (Consistency and Availability): Traditional relational databases like MySQL and PostgreSQL prioritize consistency and availability, ensuring that data is always consistent and available. However, they may struggle with partition tolerance in distributed environments.</li>
</ul>
<h6>Use Cases of the CAP Theorem in System Design</h6>
<ul>
  <li>Financial Systems: In banking applications, consistency is crucial to ensure accurate account balances and transaction histories. Therefore, systems may prioritize CP (Consistency and Partition Tolerance) to maintain data integrity.</li>
  <li>E-commerce Platforms: In online shopping platforms, availability is essential to provide a seamless user experience. Therefore, systems may prioritize AP (Availability and Partition Tolerance) to ensure that users can always access the platform, even during network issues.</li>
  <li>Social Media Applications: In social media platforms, availability is often prioritized to ensure that users can always access their feeds and post updates. Therefore, systems may prioritize AP (Availability and Partition Tolerance) while accepting eventual consistency for non-critical data like likes and comments.
  </li>
  <li>Content Delivery Networks (CDNs): CDNs prioritize availability and partition tolerance to ensure that users can access content quickly from the nearest server, even if some servers are down or experiencing network issues. Consistency is less critical in this context, as content can be updated asynchronously.</li>
  <li>Real-Time Analytics: In real-time analytics systems, availability is crucial to provide up-to-date insights and reports. Therefore, systems may prioritize AP (Availability and Partition Tolerance) while accepting eventual consistency for non-critical data like user interactions and metrics.</li>
</ul>
<h2>Difference between Concurrency and Parallelism</h2>
<ul>
  <li>Concurrency</li>
  <li>Like a single cashier serving multiple customers by switching between them very quickly.</li>
  <li>Concurrency means dealing with multiple tasks at once, but not necessarily executing them simultaneously. Instead, tasks make progress by sharing time on the same processing resource. Concurrency is an approach that is used for decreasing the response time of the system by using the single processing unit. It creates the illusion of parallelism.</li>
  <li>
    Example: first Task 1 is executing then it went to I/O stage, during this Task 2 starts executing and then it also went to I/O stage and then task 3 and so on. Finally task 1 finish its I/O stage and starts executing remaining part, Task 2 follows it and then Task 3.
  </li>
</ul>
<ul>
  <li>
    Parallelism
  </li>
  <li>Like multiple cashiers serving multiple customers at the same time.</li>
  <li>Parallelism refers to actually executing multiple tasks at the same time on multiple processing units. Here  tasks are divided into smaller sub-tasks that are processed seemingly simultaneously or parallel. It is used to increase the throughput and computational speed of the system by using multiple processors.</li>
  <li>
    Example: Task 1 is executing on CPU 1, Task 2 is executing on CPU 2 and Task 3 is executing on CPU 3 at the same time.
  </li>
</ul>
<h2>What is Load Balancer & How Load Balancing works?</h2>
<ul>
  <li>A load balancer is a device or software that distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed, improving performance and reliability.</li>
  <li>Load balancing works by monitoring the health and performance of servers and directing traffic to the most appropriate server based on various algorithms, such as round-robin, least connections, or IP hash.</li>
  <li>When a client sends a request, the load balancer intercepts it and forwards it to one of the available servers based on the chosen algorithm. The server processes the request and sends the response back to the load balancer, which then forwards it to the client.</li>
  <li>Load balancers can also provide additional features such as SSL termination, session persistence, and health checks to ensure optimal performance and availability of services.</li>
</ul>
<h6>How Load Balancer Works?</h6>
<ul>
  <li>Receives Incoming Requests: When users try to access a website or application, their requests first go to the load balancer instead of directly to a server.</li>
  <li>Checks Server Health: The load balancer continuously monitors the status of all servers. It checks which servers are healthy and ready to handle requests.</li>
  <li>Distributes Traffic: Based on factors like server load, response time, or proximity, the load balancer forwards each request to the most appropriate server. This helps avoid any server getting overloaded.</li>
  <li>Handles Server Failures: If a server goes down or becomes unresponsive, the load balancer automatically stops sending traffic to that server and redirects it to others that are still functioning properly.</li>
  <li>Optimizes Performance: By spreading traffic efficiently and using healthy servers, load balancers improve overall performance and reduce delays</li>
</ul>
<h2>Load Balancing Algorithms</h2>
<ul>
  <li>Round Robin Load Balancing Algorithm</li>
  <li>
    In this algorithm, incoming requests are distributed sequentially across a group of servers. The load balancer forwards the first request to the first server, the second request to the second server, and so on. Once it reaches the last server, it starts again from the first server. This method is simple and effective for evenly distributing traffic when all servers have similar capabilities.
  </li>
  <li>
    This algorithm is best suited for scenarios where servers have equal processing power and the incoming requests are relatively uniform in terms of resource requirements.
  </li>
  <li>
    This is a static algorithm, meaning it does not take into account the current load or performance of the servers when distributing requests.
  </li>
</ul>
<ul>
  <li>
    Weighted Round Robin Load Balancing Algorithm
  </li>
  <li>
    This algorithm is an extension of the Round Robin method, where each server is assigned a weight based on its capacity or performance. Servers with higher weights receive a larger proportion of incoming requests compared to those with lower weights. The load balancer distributes requests in a round-robin fashion, but it takes the weights into account when determining which server should handle each request.
  </li>
  <li>
    This algorithm is best suited for scenarios where servers have varying capabilities, allowing more powerful servers to handle a greater share of the traffic.
  </li>
  <li>
    This is a static algorithm, meaning it does not take into account the current load or performance of the servers when distributing requests.
  </li>
</ul>
<ul>
  <li>
    Least Connections Load Balancing Algorithm
  </li>
  <li>
    In this algorithm, the load balancer forwards incoming requests to the server with the fewest active connections. This approach helps ensure that servers with lower workloads receive more traffic, balancing the load more effectively across all servers. The load balancer continuously monitors the number of active connections on each server to make informed decisions about where to route new requests.
  </li>
  <li>
    This algorithm is best suited for scenarios where incoming requests have varying resource requirements, as it helps prevent any single server from becoming overwhelmed.
  </li>
  <li>
    This is a dynamic algorithm, meaning it takes into account the current load and performance of the servers when distributing requests.
  </li>
  <li>
    Ideal for applications where some requests take longer to process than others (e.g., video streaming or large file uploads).
  </li>
  <li>Useful when some connections stay active longer, as it ensures new requests go to servers with fewer active connections.</li>
</ul>
<ul>
  <li>
    IP Hash Load Balancing Algorithm
  </li>
  <li>
    In this algorithm, the load balancer uses a hash function to determine which server should handle an incoming request based on the client's IP address. The hash function generates a unique value for each IP address, which is then mapped to one of the available servers. This method ensures that requests from the same client are consistently directed to the same server, which can be beneficial for maintaining session state.
  </li>
  <li>
    This algorithm is best suited for scenarios where session persistence is important, such as in web applications that require users to log in and maintain their session state across multiple requests.
  </li>
  <li>
    This is a static algorithm, meaning it does not take into account the current load or performance of the servers when distributing requests.
  </li>
</ul>
<ul>
  <li>
    Least Response Time Method Load Balancing Algorith
  </li>
  <li>
    In this algorithm, the load balancer forwards incoming requests to the server that has the lowest response time. The load balancer continuously monitors the response times of all servers and uses this information to make informed decisions about where to route new requests. By directing traffic to the fastest-responding servers, this method helps improve overall performance and reduce latency for users.
  </li>
  <li>
    This algorithm is best suited for scenarios where minimizing response time is a priority, such as in real-time applications or services with strict performance requirements.
  </li>
  <li>
    This is a dynamic algorithm, meaning it takes into account the current load and performance of the servers when distributing requests.
  </li>
  <li>
    Ideal for applications where response time is critical, such as real-time data processing or online gaming.
  </li>
</ul>
<h2>Latency and Throughput in System Design</h2>
<li>
  Latency refers to the time it takes for a data packet to travel from the source to the destination. It is typically measured in milliseconds (ms) and is influenced by factors such as network congestion, distance between nodes, and processing delays at each hop along the path. Low latency is crucial for applications that require real-time responsiveness, such as online gaming, video conferencing, and financial trading systems.
</li>
<li>
  Throughput, on the other hand, refers to the amount of data that can be transmitted over a network or processed by a system within a given time frame. It is usually measured in bits per second (bps) or bytes per second (Bps). High throughput is essential for applications that involve large data transfers, such as file sharing, video streaming, and cloud storage services.
</li>
<h2>What is API Gateway?</h2>
<li>
  It serves as a centralized entry point for managing and routing requests from clients to the appropriate microservices or backend services within a system.
</li>
<li>An API Gateway serves as a reverse proxy between clients and backend services.</li>
<li>After receiving incoming client requests, it manages a number of responsibilities, including rate limitation, routing, and authentication, before forwarding the requests to the appropriate backend services.</li>
<h6>How does API Gateway work?</h6>
<ul>
  <li>Client Request: A client (e.g., web or mobile app) sends a request to the API Gateway.</li>
  <li>Request Handling: The API Gateway receives the request and performs various functions such as authentication, authorization, rate limiting, and request transformation.</li>
  <li>Routing: Based on the request's endpoint and parameters, the API Gateway routes the request to the appropriate backend service or microservice.</li>
  <li>Response Handling: The backend service processes the request and sends a response back to the API Gateway.</li>
  <li>Response Delivery: The API Gateway may perform additional processing on the response (e.g., formatting, caching) before sending it back to the client.</li>
</ul>
<h2>Rate Limiting in System Design</h2>
<ul>
  <li>Rate limiting is a technique used to control the amount of incoming and outgoing traffic to or from a network or service. It is commonly used to prevent abuse, ensure fair usage, and protect against denial-of-service (DoS) attacks.</li>
  <li>Rate limiting works by setting a maximum number of requests that can be made within a specific time frame (e.g., 100 requests per minute). If a client exceeds this limit, subsequent requests may be blocked, delayed, or throttled until the time frame resets.</li>
  <li>Common rate limiting strategies include token bucket, leaky bucket, and fixed window algorithms. These strategies help manage traffic flow and ensure that resources are allocated efficiently.</li>
  <li>Rate limiting is often implemented at various levels, including API gateways, web servers, and application layers, to provide comprehensive protection against excessive traffic and ensure optimal performance for all users.</li>
</ul>
<h6>How Rate Limiting Works?</h6>
<ul>
  <li>The number of queries a user or system can make to a service in a predetermined period of time can be managed by rate limitation. A service might permit 100 requests per minute, for instance. Any additional requests will be blocked or slowed down by the system until the time window is reset once that limit is reached.</li>
  <li>This helps prevent things like abuse, bot attacks, or overloading the server, while also ensuring that all users get a fair chance to access the service.</li>
</ul>
<h6>Rate Limiting Algorithms</h6>
<ul>
  <li>Fixed Window Algorithm: This algorithm divides time into fixed intervals (windows) and allows a certain number of requests within each window. For example, if the limit is set to 100 requests per minute, a user can make up to 100 requests in each one-minute window. If they exceed this limit, subsequent requests will be blocked until the next window starts.</li>
  <li>Sliding Log Algorithm: This algorithm maintains a log of timestamps for each request made by a user. When a new request is received, the algorithm checks the log to see how many requests were made within the defined time frame (e.g., the last minute). If the number of requests exceeds the limit, the new request is blocked; otherwise, it is allowed, and the timestamp is added to the log.</li>
  <li>Token Bucket Algorithm: In this algorithm, tokens are added to a bucket at a fixed rate (e.g., one token per second). Each request requires a token to be processed. If there are enough tokens in the bucket, the request is allowed, and a token is removed. If there are not enough tokens, the request is blocked or delayed until more tokens are available. This approach allows for bursts of traffic while still enforcing an overall rate limit.</li>
  <li>Leaky Bucket Algorithm: This algorithm uses a bucket that leaks at a constant rate. Incoming requests are added to the bucket, and if the bucket overflows (i.e., exceeds its capacity), excess requests are discarded or delayed. The leaky bucket ensures that requests are processed at a steady rate, preventing sudden spikes in traffic from overwhelming the system.</li>
</ul>
<h2>What is Content Delivery Network(CDN) in System Design</h2>
<ul>
  <li>A Content Delivery Network (CDN) is a distributed network of servers that work together to deliver web content, such as images, videos, and other static assets, to users based on their geographic location. The primary goal of a CDN is to improve the performance, reliability, and availability of web content by reducing latency and minimizing the distance between the user and the server hosting the content.</li>
  <li>CDNs achieve this by caching copies of web content on multiple servers located in various geographic regions (also known as edge servers or points of presence). When a user requests content from a website, the CDN directs the request to the nearest edge server, which serves the cached content. This reduces the time it takes for the content to reach the user, resulting in faster load times and a better overall user experience.</li>
  <li>In addition to improving performance, CDNs also help reduce the load on origin servers, enhance security through features like DDoS protection and SSL/TLS encryption, and provide scalability to handle traffic spikes during peak usage times.</li>
</ul>
<h6>How CDN Works?</h6>
<ul>
  <li>Content Replication: The CDN provider replicates and caches copies of web content on multiple edge servers located in various geographic regions around the world.</li>
  <li>User Request: When a user requests content from a website, the request is routed to the nearest edge server based on the user's geographic location.</li>
  <li>Content Delivery: The edge server serves the cached content to the user, reducing latency and improving load times.</li>
  <li>Cache Management: The CDN provider continuously monitors and updates the cached content on edge servers to ensure that users receive the most up-to-date version of the content.</li>
  <li>Load Balancing: The CDN may also use load balancing techniques to distribute traffic evenly across edge servers, ensuring optimal performance and availability.</li>
</ul>
<h2>WebSocket</h2>
<ul>
  <li>WebSocket is a communication protocol that provides full-duplex communication channels over a single TCP connection. It is designed to enable real-time, bidirectional communication between a client (such as a web browser) and a server.</li>
  <li>Unlike traditional HTTP requests, which are stateless and require a new connection for each request-response cycle, WebSocket allows for persistent connections that remain open, enabling continuous data exchange without the overhead of repeatedly opening and closing connections.</li>
  <li>WebSocket is commonly used in applications that require real-time updates, such as chat applications, online gaming, live sports updates, and collaborative tools. It allows for low-latency communication, making it ideal for scenarios where timely data delivery is crucial.</li>
  <li>The WebSocket protocol starts with an HTTP handshake to establish the connection, after which the protocol switches to WebSocket mode. Once the connection is established, both the client and server can send and receive messages independently of each other.</li>
</ul>
<h6>How WebSocket Works?</h6>
<ul>
  <li>Handshake: The WebSocket connection begins with a handshake process, where the client sends an HTTP request to the server, requesting to upgrade the connection to WebSocket. The server responds with an HTTP 101 status code, indicating that the connection is being upgraded.</li>
  <li>Connection Establishment: Once the handshake is complete, a persistent WebSocket connection is established between the client and server. This connection remains open, allowing for continuous data exchange.</li>
  <li>Bidirectional Communication: Both the client and server can send and receive messages independently of each other. Messages can be sent in either direction at any time, enabling real-time updates and interactions.</li>
  <li>Message Framing: WebSocket messages are framed, meaning that each message is encapsulated in a specific format that includes information about the message type and length. This allows for efficient parsing and processing of messages.</li>
  <li>Connection Closure: Either the client or server can close the WebSocket connection at any time by sending a close frame. The other party acknowledges the closure, and the connection is terminated.</li>
</ul>
<h6>Applications of WebSocket</h6>
<ul>
  <li>WhatsApp Web, Slack and Facebook Messenger : For instant messaging sync between browser and phone.</li>
  <li>Google Docs – Collaborative document editing where changes appear instantly.</li>
  <li>Zoom / Microsoft Teams – For live presence indicators, chat messages, and meeting controls.</li>
  <li>TradingView – Real-time stock, crypto, and forex price updates.</li>
  <li>Uber – Live driver location and ride status updates.</li>
</ul>
<h2>URL Shortner (bit.ly, TinyURL, ZipZy.in, etc) - System Design</h2>
<li><a href="https://www.geeksforgeeks.org/system-design/system-design-url-shortening-service/">URL Shortner</a></li>
<li><a href="https://chat.deepseek.com/share/9tzcp4ml2pl6z78njl">URL Shortner - Deepseek</a></li>
<h2>Design Dropbox - System Design</h2>
<li><a href="https://www.geeksforgeeks.org/system-design/design-dropbox-a-system-design-interview-question/">Design Dropbox</a></li>
<li><a href="https://chat.deepseek.com/share/r7o99244q0f5tjvmab">Design Dropbox - Deepseek</a></li>
<h2>Designing Twitter - System Design</h2>
<li><a href="https://www.geeksforgeeks.org/interview-experiences/design-twitter-a-system-design-interview-question/">Design Twitter</a></li>
<li><a href="https://chat.deepseek.com/share/id9p0rn0b6wfyg7e37">Design Twitter - Deepseek</a></li>
<h2>Netflix - System Design</h2>
<li><a href="https://www.geeksforgeeks.org/system-design/system-design-netflix-a-complete-architecture/">Design Netflix</a></li>
<li><a href="https://chat.deepseek.com/share/jc1koatmtkjswpsp6w">Design Netflix - Deepseek</a></li>
<h2>Uber - System Design</h2>
<li><a href="https://www.geeksforgeeks.org/system-design/system-design-of-uber-app-uber-system-architecture/">Design Uber</a></li>
<li><a href="https://chat.deepseek.com/share/1wmk8g6bkmz83eb6nd">Design Uber - Deepseek</a></li>
<h2>BookMyShow - System Design</h2>
<li><a href="https://www.geeksforgeeks.org/system-design/design-bookmyshow-a-system-design-interview-question/">Design BookMyShow</a></li>
<li><a href="https://chat.deepseek.com/share/s3o7r49g58p57ro0wj">Design BookMyShow - Deepseek</a></li>
<h2>Facebook - System Design</h2>
<li><a href="https://www.geeksforgeeks.org/system-design/desiging-facebook-messenger-system-design-interview/">Design Facebook</a></li>
<li><a href="https://chat.deepseek.com/share/hsxz9haxm3tlw100h9">Design Facebook - Deepseek</a></li>
<h2>WhatsApp - System Design</h2>
<li><a href="https://www.geeksforgeeks.org/system-design/designing-whatsapp-messenger-system-design/">Design WhatsApp</a></li>
<li><a href="https://chat.deepseek.com/share/zwkgnc2bvv0w2ujnlu">Design WhatsApp - Deepseek</a></li>
<h2><a href="https://www.geeksforgeeks.org/system-design/most-commonly-asked-system-design-interview-problems-questions/">System Design Interview Questions</a></h2>
