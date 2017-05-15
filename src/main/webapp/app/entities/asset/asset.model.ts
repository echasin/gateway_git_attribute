import { Assetrecordtype } from '../assetrecordtype';
import { Assetassetmbr } from '../assetassetmbr';
export class Asset {
    constructor(
        public id?: number,
        public name?: string,
        public nameshort?: string,
        public description?: string,
        public details?: string,
        public status?: string,
        public lastmodifiedby?: string,
        public lastmodifieddatetime?: any,
        public domain?: string,
        public assetrecordtype?: Assetrecordtype,
        public parentasset?: Assetassetmbr,
        public childasset?: Assetassetmbr,
    ) {
    }
}
