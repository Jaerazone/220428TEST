var express = require('express');
var router = express.Router();

const memos = require('../memo.json');
let count = 2;

router.get('/', function(req, res, next) {
    console.log(memos);
    res.send(memos);
});

// post를 통해서 WriteView에서 메모값을 받아옴
router.post('/', function(req,res,next) {
    const memo = req.body.data // 객체로받음
    count++;
    const m = {
        id:count,
        writer : '익명',
        title : memo.title,
        memo : memo.memo
    }
    memos.push(m)
    res.send('서버 memo객체로 받음ok');
})

router.get('/:id', function(req,res,next) {
    const m = memos.filter((memo) => { if (memo.id == req.params.id) {return true}});
    
    res.senDd(m[0]);
})

module.exports = router;
