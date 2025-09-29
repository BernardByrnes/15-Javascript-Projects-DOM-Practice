//~ 1. DECORATOR PATTERN

// Category: Structural Design Pattern

// Definition: The Decorator pattern lets you add new functionality to an object dynamically without changing its underlying structure.

// Key Idea: Instead of creating a huge subclass for every feature combination, you "wrap" the original object in another object (a decorator) that adds extra behavior.

// Analogy: Think of coffee. You can start with a plain coffee (base object). Then add milk, sugar, or whipped cream (decorators). Each topping "wraps" the coffee, adding extra features.

// When to Use

// When you want to add features at runtime without changing existing code.

// When inheritance would cause too many subclasses.

//& EXAMPLE
// Component interface
interface Notifier {
  send(message: string): void;
}

// Concrete Component
class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`Sending EMAIL: ${message}`);
  }
}

// Decorator
class NotifierDecorator implements Notifier {
  constructor(protected wrappee: Notifier) {}
  send(message: string): void {
    this.wrappee.send(message);
  }
}

// Concrete Decorators
class SMSNotifier extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`Sending SMS: ${message}`);
  }
}

class SlackNotifier extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`Sending Slack: ${message}`);
  }
}

// Usage
let notifier: Notifier = new EmailNotifier();
notifier = new SMSNotifier(notifier);
notifier = new SlackNotifier(notifier);

notifier.send("System Alert!");

// ✅ Output: Email → SMS → Slack notifications.
// Here, decorators add extra channels dynamically.

//~ 2. BRIDGE PATTERN

// Category: Structural Design Pattern

// Definition: The Bridge pattern separates an abstraction from its implementation, so both can evolve independently.

// Key Idea: Instead of binding abstraction and implementation tightly, you create two hierarchies:

// Abstraction (high-level control)

// Implementation (low-level details)
// And then connect them with a "bridge".

// Analogy: Think of a remote control (abstraction) and a TV (implementation). The remote can work with any brand of TV, and TVs can evolve independently of the remote.

// When to Use

// When you want to avoid a huge class hierarchy of combinations.

// When abstraction and implementation may change independently.

// &EXAMPLE
// Implementation
interface Device {
  powerOn(): void;
  powerOff(): void;
}

class TV implements Device {
  powerOn(): void {
    console.log("TV is ON");
  }
  powerOff(): void {
    console.log("TV is OFF");
  }
}

class Radio implements Device {
  powerOn(): void {
    console.log("Radio is ON");
  }
  powerOff(): void {
    console.log("Radio is OFF");
  }
}

// Abstraction
class RemoteControl {
  constructor(protected device: Device) {}
  turnOn(): void {
    this.device.powerOn();
  }
  turnOff(): void {
    this.device.powerOff();
  }
}

// Refined Abstraction
class AdvancedRemote extends RemoteControl {
  mute(): void {
    console.log("Device is muted");
  }
}

// Usage
let tvRemote = new AdvancedRemote(new TV());
tvRemote.turnOn(); // TV is ON
tvRemote.mute(); // Device is muted
tvRemote.turnOff(); // TV is OFF
