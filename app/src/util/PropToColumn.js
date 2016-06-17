/**
 * Maps the name of a property to the number of the column of the property in the data csv file
 */
export function propToColumn(property) {

    switch (property) {

        case 'TimeStamp':
            return 0;

        case 'Station.Number':
            return 1;

        case 'Distance.from.36':
            return 2;

        case 'Depth':
            return 3;

        case 'Discrete.Chlorophyll':
            return 4;

        case 'Chlorophyll.a.a.PHA':
            return 5;

        case 'Fluorescence':
            return 6;

        case 'Calculated.Chlorophyll':
            return 7;

        case 'Discrete.Oxygen':
            return 8;

        case 'Oxygen.Electrode.Output':
            return 9;

        case 'Oxygen.Saturation.percent':
            return 10;

        case 'Calculated.Oxygen':
            return 11;

        case 'Discrete.SPM':
            return 12;

        case 'Optical.Backscatter':
            return 13;

        case 'Calculated.SPM':
            return 14;

        case 'Measured.Extinction.Coefficient':
            return 15;

        case 'Calculated.Extinction.Coefficient':
            return 16;
            
        case 'Salinity':
            return 17;  

        case 'Temperature':
            return 18;  
        
        case 'Sigma.t':
            return 19;

        case 'Nitrite':
            return 20;

        case 'Nitrate...Nitrite':
            return 21;

        case 'Ammonium':
            return 22;

        case 'Phosphate':
            return 23;

        case 'Silicate':
            return 24;

        default:
            return 4;
    }


}