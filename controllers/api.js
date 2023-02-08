const set0 = {
    "x": 15,
    "y": 476,
    "pass": "FCYROXHTGE"
}

const set1 = {
    "x": 9,
    "y": 461,
    "pass": "BFHEGxwYX"
}

const set2 = {
    "x": 15,
    "y": 512,
    "pass": "FCYROXHTGE"
}

const set3 = {
    "x": 28,
    "y": 492,
    "pass": "BFHEGxwYX"
}

const getAnswer = async (req, res) => {
    const { table } = req.query

    const answer = req.body

    let date = new Date()


    const check = (set) => {
        if (answer.x === set.x && answer.y === set.y && answer.pass === set.pass) {
            res.status(200).json({ "result": "Huntz Successful",
            "time": `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        })
        } else {
            res.status(400).json({ "result": "F in chat! Try again T_T..."
        })
        }

    }

    switch (table % 4) {
        case 0:
            check(set0)
            // console.log("0")
            break
        case 1:
            check(set1)
            // console.log("1")
            break
        case 2:
            check(set2)
            // console.log("2")
            break
        case 3:
            check(set3)
            // console.log("3")
            break
    }
}

module.exports = getAnswer