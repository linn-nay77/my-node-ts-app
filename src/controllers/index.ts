export class IndexController {
    public getHello(req, res) {
        res.send('Hello World');
    }

    public getGoodbye(req, res) {
        res.send('Goodbye World');
    }
}