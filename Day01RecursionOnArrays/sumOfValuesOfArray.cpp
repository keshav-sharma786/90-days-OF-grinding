#include <iostream>
using namespace std;

int f(int arr[], int idx, int n) {
    // base case
    if(idx == n - 1) {
        // means only 1 element left in the array
        // and the sum of that one element will be that element itself
        return arr[idx];
    }
    // recursive function call
    return arr[idx] + f(arr, idx + 1, n);
}

int main()
{
    int arr[] = {2, 3, 5, 20, 1};
    int n = 5;
    // function call
    int sum = f(arr, 0, n);
    cout << sum << endl;
    return 0;
}