export default ServiceComands = {
    buildComandObject(x, y, id, conditional){

        return {
            "id": id, 
            "position": {
                "x": x,
                "y": y
            },
            "conditional": conditional
        }
    },

    buildComandObjectJustPosition(x, y){
        return {
            "x": x,
            "y": y
        }
    }

}