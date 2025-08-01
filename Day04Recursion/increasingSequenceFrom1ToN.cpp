#include <iostream>
using namespace std;

void f(int n) {
    // base case
    if(n < 1) {
        return;
    }
    // assumption / recursive function call
    f(n - 1);
    cout << n << " ";
}

int main() {

    int n = 20;
    // function call
    f(n);
    return 0;
}
