var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var IntelProcessor = /** @class */ (function () {
    function IntelProcessor() {
    }
    IntelProcessor.prototype.getProcessorDescription = function () {
        return "Intel Processor";
    };
    return IntelProcessor;
}());
var AMDProcessor = /** @class */ (function () {
    function AMDProcessor() {
    }
    AMDProcessor.prototype.getProcessorDescription = function () {
        return "AMD Processor";
    };
    return AMDProcessor;
}());
var NvidiaProcessor = /** @class */ (function () {
    function NvidiaProcessor() {
    }
    NvidiaProcessor.prototype.getProcessorDescription = function () {
        return "Nvidia Processor";
    };
    return NvidiaProcessor;
}());
// Base Computer Abstraction
var Computer = /** @class */ (function () {
    function Computer(processor) {
        this.processor = processor;
    }
    Computer.prototype.getDescription = function () {
        return "".concat(this.getBrand(), " Computer with ").concat(this.processor.getProcessorDescription());
    };
    Computer.prototype.display = function () {
        console.log(this.getDescription());
    };
    return Computer;
}());
// Concrete Computer Implementations
var DellComputer = /** @class */ (function (_super) {
    __extends(DellComputer, _super);
    function DellComputer(processor) {
        return _super.call(this, processor) || this;
    }
    DellComputer.prototype.getBrand = function () {
        return "Dell";
    };
    return DellComputer;
}(Computer));
var HPComputer = /** @class */ (function (_super) {
    __extends(HPComputer, _super);
    function HPComputer(processor) {
        return _super.call(this, processor) || this;
    }
    HPComputer.prototype.getBrand = function () {
        return "HP";
    };
    return HPComputer;
}(Computer));
var LenovoComputer = /** @class */ (function (_super) {
    __extends(LenovoComputer, _super);
    function LenovoComputer(processor) {
        return _super.call(this, processor) || this;
    }
    LenovoComputer.prototype.getBrand = function () {
        return "Lenovo";
    };
    return LenovoComputer;
}(Computer));
var IBMComputer = /** @class */ (function (_super) {
    __extends(IBMComputer, _super);
    function IBMComputer(processor) {
        return _super.call(this, processor) || this;
    }
    IBMComputer.prototype.getBrand = function () {
        return "IBM";
    };
    return IBMComputer;
}(Computer));
// Demonstration and Usage
function demonstrateComputers() {
    console.log("=== Computer Configurations ===");
    // Create processors
    var intel = new IntelProcessor();
    var amd = new AMDProcessor();
    var Nvidia = new NvidiaProcessor();
    // Create computer combinations using the Bridge Pattern
    var computers = [
        new DellComputer(intel),
        new DellComputer(amd),
        new HPComputer(intel),
        new HPComputer(Nvidia),
        new LenovoComputer(amd),
        new LenovoComputer(Nvidia),
        new IBMComputer(intel),
        new IBMComputer(amd),
    ];
    // Display all computer configurations
    computers.forEach(function (computer) {
        computer.display();
    });
}
// Run the demonstration
demonstrateComputers();
