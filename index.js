console.log("O Herói tem de saldo de " + getWinLoss(1001,1) + " esta no nivel de " + getRank(getWinLoss(1001,1)))

function getWinLoss(win, loss) {
    result = win - loss
    return result
}

function getRank(getWinLoss) {
    if (getWinLoss < 10) {
        getRank = "Ferro"
    } else if (getWinLoss > 11 && getWinLoss < 20) {
        getRank = "Bronze"
    } else if (getWinLoss > 21 && getWinLoss < 50) {
        getRank = "Prata"
    } else if (getWinLoss > 51 && getWinLoss < 80) {
        getRank = "Ouro"
    } else if (getWinLoss > 81 && getWinLoss < 90) {
        getRank = "Diamante"
    } else if (getWinLoss > 91 && getWinLoss < 100) {
        getRank = "Lendario"
    } else {
        getRank = "Imortal"
    }
    return getRank
}