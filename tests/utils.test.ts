
// const chai =   await import("chai");
// const { expect } =  chai;
// const mocha =   await import("mocha");
// const { describe, it } = mocha;

import chai from "chai";
import mocha from "mocha";
import { describe, it } from 'mocha';
import { expect } from  'chai';


import { convertCsvToArray, sortCostCenterArray } from "../src/utils/utils.ts";

describe("CSVToArray", () => {
    it("should convert CSV data to Array", () => {
        const csvFilePath = `1,Cost Center A
2,Cost Center B
3,Cost Center C
4,Cost Center D`;
        const expectedArray = [
            ['1', "Cost Center A"],
            ['2', "Cost Center B"],
            ['3', "Cost Center C"],
            ['4', "Cost Center D"]
        ];
        const jsonData = convertCsvToArray(csvFilePath);
        expect(jsonData).to.deep.equal(expectedArray);
    });
    it("should throw an error for invalid CSV format", () => {
        
        const csvFilePath = `1  Cost Center A
2   Cost Center B
3   Cost Center C
4   Cost Center D`;
        const expectError = 'Invalid CSV format'
        expect(()=>convertCsvToArray(csvFilePath)).to.throw((expectError));
    })
});


describe("Sort Cost center Array", () => {
    it("Should return sorted Array", () => {
        const inputArray  = [
            ['2', "Cost Center B"],
            ['1', "Cost Center A"],
            ['4', "Cost Center D"],
            ['3', "Cost Center C"]
        ];
        const expectedArray = [
            {'id': '1', 'name': 'Cost Center A'},
            {'id': '2', 'name': 'Cost Center B'},
            {'id': '3', 'name': 'Cost Center C'},
            {'id': '4', 'name': 'Cost Center D'}
        ];
        expect(sortCostCenterArray(inputArray)).to.deep.equal(expectedArray)
    });
});
