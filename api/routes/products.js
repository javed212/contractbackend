const express = require('express');
const router = express.Router();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey:'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',
});

const openai = new OpenAIApi(configuration);

router.get('/', async (req, res, next) => {
    const contract = req.query.message;
    //const contract = " You agree to notify the Foundation and provide copies of any reports or findings if You conduct or commission any research or evaluation regarding the Project. If You are selected to participate in Foundation-fundedresearch or evaluation relating to the Project, You agree to: (a) designate a primary point of contact; (b) cooperate with theFoundation’s evaluation partner as reasonably required to implement an evaluation plan; (c) provide or facilitate the collection of dataas reasonably required; and (d) permit dissemination of resulting reports or findings.";
    const prompt = "Summarize this statement in simple term in one line : "
    const input = prompt + contract;
    console.log('message: ' + req.query.message);
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
            role: 'user',
            content: input
            }
        ],
        max_tokens: 1000

    });

    return res.status(200).json({
        success:true,
        data:response.data.choices[0].message
    });
    

});
/*
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handing GET request for /product'
    });

});
*/

router.get('/:contractText', (req, res, next) => {
    const txt = req.params.contractText;
    
        res.status(200).json({
            message: 'Welcome',
            txt: txt
        });
    });

module.exports = router;