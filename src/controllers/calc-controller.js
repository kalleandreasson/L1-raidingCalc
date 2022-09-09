
export class CalcController {

    async apiTest(req, res, next) {
        res
            .status(200)
            .json({
                Name: "Nisse"
            })
    }

}