#include <iostream>
using namespace std;

void f(int n, int k) {
    // base case
    if(k < 1) {
        return;
    }
    // recursive function call / Recursion
    f(n, k - 1);
    cout << (n * k) << " ";
}

int main() {
    int n = 3;
    int k = 8;
    // function call
    f(n, k);
    return 0;
}
