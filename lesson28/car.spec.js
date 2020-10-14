import Car from "./car";

describe("Class Car",()=>{
    it("Getting info about car", ()=>{
        const mazda = new Car({brand: "Mazda", model: 3});
        expect(mazda.brand).toBe("Mazda");
    });
})