#include <iostream>
using namespace std;

int f(int n) {
    // base case
    if(n == 0) {
        return 0;
    }
    if(n == 1) {
        return 1;
    }
    // recursive function call / Assumption
    return f(n - 1) + f(n - 2);
}

int main() {
    int n = 5;
    cout << f(5) << endl;
    return 0;
}