/**
 * You run an e-commerce website and want to record the last N order ids in a log. 
 * Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. 
i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.
 */

class Logger {
    #logs = [];

    record(id){
        this.#logs.push(id);
    }

    getLast(i){
        return this.#logs[this.#logs.length - i];
    }
}

let logger = new Logger();

logger.record(1)
logger.record(2)
logger.record(3)
logger.record(4)

console.log(logger.getLast(2))