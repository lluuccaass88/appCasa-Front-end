import ServiceComands from '../../../../services/ServiceComands.js';


export default Controller = {
    positionPaint(overallWidth){
        const positionX = (overallWidth / 2) - 100;
        return ServiceComands.buildComandObjectJustPosition(positionX, 0)
    }
}