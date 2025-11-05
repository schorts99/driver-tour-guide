"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverTourGuide = void 0;
class DriverTourGuide {
    driver;
    steps = [];
    constructor(driver) {
        this.driver = driver;
    }
    startTour() {
        this.driver.setSteps(this.steps);
        this.driver.drive();
    }
    addStep(step) {
        const driverStep = {
            popover: {
                title: step.title,
                description: step.description,
                side: this.translateSide(step.side),
                align: this.translateAlign(step.align),
            },
        };
        if (step.element) {
            driverStep['element'] = step.element;
        }
        this.steps.push(driverStep);
        return this;
    }
    translateSide(side) {
        switch (side) {
            case "BOTTOM":
                return "bottom";
            case "LEFT":
                return "left";
            case "RIGHT":
                return "right";
            case "TOP":
                return "top";
        }
    }
    translateAlign(align) {
        switch (align) {
            case "CENTER":
                return "center";
            case "END":
                return "end";
            case "START":
                return "start";
        }
    }
}
exports.DriverTourGuide = DriverTourGuide;
//# sourceMappingURL=driver-tour-guide.js.map