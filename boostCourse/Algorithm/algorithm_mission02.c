#include <stdio.h>
#include <stdlib.h>

// 미션2. 친구들과 최단거리에 있는 위치 구하기
// 시간 복잡도: O(nlogn)

int compare(const void *a, const void *b);

int main(void)
{
    // 임의의 배열 선언&할당
    int array[] = { 1, 1, 1, 1, 5 };

    // 배열의 길이
    int length = sizeof(array) / sizeof(int);

    // 중앙값 선언, 임의 값 할당
    int median = 0;

    // 퀵정렬 - stdlib.h 라이브러리 이용
    qsort(array, length, sizeof(int), compare);

    // 중앙값 찾기
    median = (array[(length + 1) / 2-1]);

    // 중앙값 출력
    printf("%d\n", median);

}

// 오름차순 정렬 함수 - qsort 함수 사용에 필요
int compare(const void *a, const void *b)
{
    if (*(int *)a > *(int *)b)
        return 1;
    else if (*(int *)a < *(int *)b)
        return -1;
    else
        return 0;
}


