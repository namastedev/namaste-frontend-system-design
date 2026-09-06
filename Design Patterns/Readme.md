<h1>Design Patterns</h1>
<ul>
  <li>What is Design Pattern? and What are 3 types of Design Patterns?(Creational, Structural, Behavioral)</li>
  <li>ChatGpt link : <a href="https://chatgpt.com/share/695b647f-3770-8006-9a2f-b168bad82ed2">ChatGPT Explanation</a>
  </li>
</ul>

<h2>Creational Design Patterns</h2>
<h4>1. Singleton Pattern</h4>
<ul>
  <li>Singleton Pattern ensures that a class can have only ONE object (instance) in the entire application. Everyone uses the same object — no duplicates allowed.</li>
  <li>Mostly used where we need Security and Consistency. Example Bank Locker System, where there is only ONE locker room in the bank. Everyone uses that same locker room. You cannot create your own locker room. You can only access the same one. That locker room = Singleton Object</li>
  <li>ChatGpt link : <a href="https://chatgpt.com/share/695b7da6-4710-8006-81c1-413f4498a9a0">ChatGPT Explanation</a></li>
  <li>
    Code Example (Class) :
    <pre><code>
    let instance;
    class SingletonShoppingBag {
        constructor() {
            // If instance already exists, just return it
            if (instance) {
                return instance;
            }
            // First time creation
            this.bag = [];
            instance = this;
        }

        addItem(item) {
            this.bag.push(item);
        }

        getBag() {
            return this.bag;
        }
    };

    // Export the SAME frozen instance
    export const singletonShoppingInstance = Object.freeze(new SingletonShoppingBag());

</code></pre>

  </li>
  <li>
    Code Example (Object) :
    <pre><code>
    let shopping = [];   // Private data (not accessible directly)
    const ShoppingBag = {
        getBag: () => console.log(shopping),
        addItem: (item) => shopping.push(item),
    };
    // Export frozen object to prevent modification
    export const singletonShoppingObject = Object.freeze(ShoppingBag);
    </code></pre>
  </li>
  <li>Other Implementation link : <a href="https://github.com/ashishps1/awesome-low-level-design/blob/main/design-patterns/Javascript/Creational%20Pattern/Singleton%20Design%20%20Pattern/singleton.js">Here</a></li>
</ul>

<h4>2. Factory Pattern</h4>
<ul>
    <li>Factory Pattern = A central place that creates objects for you. You just tell it what you want, it gives you the object — you don’t worry about how it is created.
    </li>
    <li>In simple terms it's like creating different object based on different conditions.(Object creation based on if/else if)</li>
    <li>Mostly used when the creation process is complex or needs to be centralized. Example: A car factory that makes different types of cars (SUV, Sedan, Truck) based on customer orders. The factory handles the complex process of assembling the cars, so customers just get the car they want without worrying about how it was made.
    </li>
    <li>ChatGpt link : <a href="https://chatgpt.com/share/695b8328-74ec-8006-990b-c624aefb5a02">ChatGPT Explanation</a></li>
    <li>Other Implementation link : <a href="https://github.com/ashishps1/awesome-low-level-design/blob/main/design-patterns/Javascript/Creational%20Pattern/Factory%20Design%20Pattern/factory.js">Here</a></li>
</ul>

<h4>3. Abstract Factory Pattern</h4>
<ul>
    <li>Abstract Factory Pattern = A factory of factories. It provides an interface to create families of related or dependent objects without specifying their concrete classes.</li>
    <li>In simple terms you can think like creating if inside if. Based on first condition it will go to another factory to create object.</li>
    <li>Mostly used when there are multiple families of products that need to be created. Example: Imagine McDonald's and KFC both sell combo meals:
        <ul>
            <li>McDonald's combo meal includes a burger, fries, and a drink.</li>
            <li>KFC combo meal includes fried chicken, mashed potatoes, and a drink.</li>
        </ul>
        An Abstract Factory can create these combo meals without specifying the exact items. You just ask for a "McDonald's combo" or a "KFC combo," and the factory takes care of assembling the right items for you.
    </li>
    <li>ChatGpt link : <a href="https://chatgpt.com/share/695b84f6-f748-8006-8658-a2997cec2718">ChatGPT Explanation</a></li>
</ul>

<h4>4. Builder Pattern</h4>
<ul>
    <li>Builder Pattern = A step-by-step way to create complex objects. You want to create complex objects step-by-step, and you don’t want a huge constructor with 10+ parameters.</li>
    <li>Mostly used when the object creation process is complex and involves multiple steps. Example: Building a custom computer where you choose components like CPU, RAM, storage, and graphics card step-by-step to create your desired configuration.</li>
    <li>ChatGpt link : <a href="https://chatgpt.com/share/695b8df2-9374-8006-99f2-3592cae75fc2">ChatGPT Explanation</a></li>
</ul>

<h2>Structural Design Patterns (ADFP)</h2>
<h4>1. Adapter Pattern</h4>
<ul>
    <li>Adapter Pattern = A bridge between two incompatible interfaces. It allows classes with incompatible interfaces to work together by converting the interface of one class into an interface expected by the clients.</li>
    <li>Mostly used when you want to integrate classes that have incompatible interfaces. Example: A power adapter that allows a device with a US plug to work in a European socket.</li>
    <li>ChatGpt link : <a href="https://chatgpt.com/share/695b9038-4630-8006-9060-0e34a569b967">ChatGPT Explanation</a></li>
</ul>

<h4>2. Decorator Pattern</h4>
<ul>
    <li>Decorator Pattern = Lets you add new features to an object without changing its original code. I don’t change the product, I just keep putting new wrappers on it.</li>
    <li>Mostly used when you want to add responsibilities to individual objects dynamically and transparently, without affecting other objects. Example: Adding toppings to a pizza. You start with a basic pizza and then add toppings like cheese, pepperoni, and mushrooms as needed.</li>
    <li>ChatGpt link : <a href="https://chatgpt.com/share/695b9470-29b0-8006-9fbf-db4c6eefeca1">ChatGPT Explanation</a></li>
</ul>

<h4>3. Facade Pattern</h4>
<ul>
    <li>Facade Pattern = A simplified interface to a complex system. Instead of talking directly to many complicated subsystems, you talk to one simple “front desk” object (the facade), and it handles everything for you.</li>
    <li>Mostly used when you want to provide a simple interface to a complex subsystem, mostly for microservices. Example: A Receptionist at a hotel who helps guests with check-in, room service, and other requests without them needing to interact with each department directly.</li>
    <li>ChatGpt link : <a href="https://chatgpt.com/share/695b9cdd-18d4-8006-a1c7-784eed9e3efe">ChatGPT Explanation</a></li>
</ul>

<h4>4. Proxy Pattern</h4>
<ul>
    <li>Proxy Pattern = Instead of talking to the real object directly, you talk to a middleman (proxy) that controls access to the real object. The proxy decides , Should you allowed?, Should it cache the result?</li>
    <li>Mostly used for API Gateway, Caching, CDN, Auth Systems.</li>
    <li>ChatGpt link : <a href="https://chatgpt.com/share/695b9e69-bc5c-8006-b484-8f60f003cb49">ChatGPT Explanation</a></li>
</ul>

<h2>Behavioral Design Patterns(COS-M)</h2>
<h4>1. Observer Pattern</h4>
<ul>
    <li>Observer Pattern = A way for objects to subscribe to events or changes in another object. When the main object changes, it notifies all its subscribers (observers) about the change. Observer Pattern = “One thing changes → Many things automatically get notified.”</li>
    <li>There is:
        <ul>
            <li>Subject → The thing being watched</li>
            <li>Observers → The things that want updates</li>
        </ul>
        Whenever the subject changes, it automatically informs all observers.
    </li>
    <li>Mostly used in event-driven systems, like UI frameworks or real-time data feeds. Example: A news app where users can subscribe to different news categories (like sports, politics, entertainment). When a new article is published in a category, all users subscribed to that category get notified. Mostly for notification systems.</li>
    <li>ChatGpt link : <a href="https://chatgpt.com/share/695ba746-24bc-8006-a243-36187e4244a3">ChatGPT Explanation</a></li>
</ul>

<h4>2. Strategy Pattern</h4>
<ul>
    <li>Strategy Pattern = A way to define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy Pattern lets you choose different algorithm (way of doing something) at runtime without changing the main code. Instead of writing if-else or switch everywhere, you plug in a strategy/algorithm (behavior) and the program automatically uses it.</li>
    <li>Mostly used when you have multiple ways to do something and want to switch between them easily. Example: A payment system that supports multiple payment methods (like credit card, PayPal, cryptocurrency). The system can switch between different payment strategies based on user choice without changing the core payment processing code.</li>
    <li>ChatGpt link : <a href="https://chatgpt.com/share/695baf08-f338-8006-a423-f2039a1ea865">ChatGPT Explanation</a></li>
    <li>For the example implementation maybe we don't need to extend super class, we can write without it as well.</li>
</ul>

<h4>3. Command Pattern</h4>
<ul>
    <li>Command Pattern = Instead of directly calling an action, you wrap the action into a command object and send it to someone else to execute later. So the sender does not care how the work is done — it just says: “Here’s a command, please execute it.”</li>
    <li>Example use Case: Remote control-> You press a button (send command) and the remote control tells the TV to do something (execute command). The remote control doesn’t need to know how the TV works, it just sends the command.</li>
    <li>Mostly used in GUI systems, task scheduling, and undo/redo operations. Example: In a text editor, when you perform actions like typing, deleting, or formatting text, each action can be encapsulated as a command object. This allows the editor to support undo and redo functionality by keeping a history of command objects that can be executed or reversed as needed.</li>
    <li>ChatGpt link : <a href="https://chatgpt.com/share/695bb14c-8b98-8006-84c5-b013f0a2cd55">ChatGPT Explanation</a></li>
    <li>Maybe for this you can skip the implementation part as it is not so important.</li>
</ul>

<h4>4. Mediator Pattern</h4>
<ul>
    <li>Mediator Pattern = A central hub that manages communication between different objects. Instead of objects talking directly to each other, they talk to the mediator, which then relays messages as needed.</li>
    <li>Example use Case: Air Traffic Control -> All planes communicate with the control-tower/ATC (mediator) instead of directly with each other. The tower coordinates takeoffs and landings to avoid collisions.</li>
    <li>Mostly used in complex systems where many objects interact with each other. Example: In a chat application, a mediator can manage communication between different users. Instead of users sending messages directly to each other, they send messages to the mediator, which then forwards the messages to the intended recipients. This simplifies the communication process and reduces dependencies between users.</li>
    <li>ChatGpt link : <a href="https://chatgpt.com/share/695bb2cf-10b4-8006-9f94-21ceb17f1b0e">ChatGPT Explanation</a></li>
</ul>
