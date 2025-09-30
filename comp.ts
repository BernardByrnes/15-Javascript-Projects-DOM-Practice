// Processor Interface and Implementations
interface Processor {
  getProcessorDescription(): string;
}

class IntelProcessor implements Processor {
  getProcessorDescription(): string {
    return "Intel Processor";
  }
}

class AMDProcessor implements Processor {
  getProcessorDescription(): string {
    return "AMD Processor";
  }
}

class MydliaProcessor implements Processor {
  getProcessorDescription(): string {
    return "Mydlia Processor";
  }
}

// Base Computer Abstraction
abstract class Computer {
  protected processor: Processor;

  constructor(processor: Processor) {
    this.processor = processor;
  }

  abstract getBrand(): string;

  getDescription(): string {
    return `${this.getBrand()} Computer with ${this.processor.getProcessorDescription()}`;
  }

  display(): void {
    console.log(this.getDescription());
  }
}

// Concrete Computer Implementations
class DellComputer extends Computer {
  constructor(processor: Processor) {
    super(processor);
  }

  getBrand(): string {
    return "Dell";
  }
}

class HPComputer extends Computer {
  constructor(processor: Processor) {
    super(processor);
  }

  getBrand(): string {
    return "HP";
  }
}

class LenovoComputer extends Computer {
  constructor(processor: Processor) {
    super(processor);
  }

  getBrand(): string {
    return "Lenovo";
  }
}

class IBMComputer extends Computer {
  constructor(processor: Processor) {
    super(processor);
  }

  getBrand(): string {
    return "IBM";
  }
}

// Demonstration and Usage
function demonstrateComputers(): void {
  console.log("=== Computer Configurations ===");

  // Create processors
  const intel = new IntelProcessor();
  const amd = new AMDProcessor();
  const mydlia = new MydliaProcessor();

  // Create computer combinations using the Bridge Pattern
  const computers = [
    new DellComputer(intel),
    new DellComputer(amd),
    new HPComputer(intel),
    new HPComputer(mydlia),
    new LenovoComputer(amd),
    new LenovoComputer(mydlia),
    new IBMComputer(intel),
    new IBMComputer(amd),
  ];

  // Display all computer configurations
  computers.forEach((computer) => {
    computer.display();
  });
}

// Run the demonstration
demonstrateComputers();
