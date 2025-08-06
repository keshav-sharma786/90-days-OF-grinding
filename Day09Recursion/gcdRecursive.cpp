#include <iostream>
using namespace std;

int gcd(int a, int b) {
    if(b > a) {
        return gcd(b, a);
    }
    // base case
    if(b == 0) {
        return a;
    }
    // recursive function call
    return gcd(b, a % b);
}

int main() {
    cout << gcd(28, 18) << endl;
    return 0;
}