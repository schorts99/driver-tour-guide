import { Driver } from "driver.js";
import { TourGuide, TourStep } from "@schorts/shared-kernel";
export declare class DriverTourGuide implements TourGuide {
    private readonly driver;
    private readonly steps;
    constructor(driver: Driver);
    startTour(): void;
    addStep(step: TourStep): TourGuide;
    private translateSide;
    private translateAlign;
}
//# sourceMappingURL=driver-tour-guide.d.ts.map