// 93. 复原 IP 地址
// https://leetcode-cn.com/problems/restore-ip-addresses/

const restoreIpAddresses = (s) => {
    let res = [];
    const dfs = (segMents, segStart) => {
        if(segMents.length === 4){
            if(segStart === s.length){
                res.push(segMents.join('.'));
            }
            return
        }
        if(segStart === s.length) return
        if(s[segStart] === '0'){
            segMents.push('0');
            dfs(segMents, segStart+1);
            console.log(segMents)
            segMents.pop();
            return
        }
        let addr = '';
        for(let i=segStart;i<s.length;i++){
            addr = addr + s[i];
            if(addr > 0 && addr <= 0xFF){
                segMents.push(addr);
                dfs(segMents, i+1);
                segMents.pop();
            }
            // }else{
            //     break;
            // }
        }
    }
    dfs([], 0);
    return res;
}

console.log(restoreIpAddresses("255255035"))
