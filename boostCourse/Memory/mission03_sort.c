#include <stdio.h>

void sort(int x, int arr[]);

int main()
{
    int n = 7;
    int arr[7] = {0, 25, 10, 17, 6, 12, 9};

    // 정렬 함수 호출
    sort(n, arr);

    // 결과 값 변수 선언
    char *result = "";

    printf("result = { ");

    for (int i = 0; i < 7; i++)
    {
        if (i != 6)
        {
            printf("%d, ", arr[i]);
        }
        else
        {
            // 마지막 출력 값인 경우에는 ',' 대신 '}'' 출력해라
            printf("%d }", arr[i]);
        }
    }

    printf("\n");

    return 0;
}

void sort(int x, int arr[])
{
    // 임시 변수 선언
    int temp;

    // 버블 정렬: 처음부터 끝까지 모든 요소를 돌며 모든 요소를 비교

    for (int i = 0; i < x; i++) // 반복은 요소의 개수 만큼
    {
        for(int j = 0; j < x - 1; j++) // 비교 횟수는 전체 요소 개수의 -1 만큼
        {
            if(arr[j] > arr[j + 1])
            {
                // 현재 값과 다음 값을 비교하여 큰 값을 다음으로 보냄
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

}