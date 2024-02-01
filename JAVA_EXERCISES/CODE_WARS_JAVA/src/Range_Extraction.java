public class Range_Extraction {

    public static void main(String[] args) {
        //System.out.println(rangeExtraction(new int[] {-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20}));
        System.out.println(rangeExtraction(new int[] {-3,-2,-1,2,10,15,16,18,19,20}));
    }

    public static String rangeExtraction(int[] arr) {
        if (arr.length<=0){
            return "";
        }
        int rangeQuantity = 1;
        StringBuilder resp = new StringBuilder();
        for (int i = 0; i < arr.length; i++) {
            int nextNumber = i;
            while(nextNumber<arr.length-1 && arr[nextNumber]+1==arr[nextNumber+1]){
                rangeQuantity++;
                nextNumber++;
            }
            if (rangeQuantity>=3){
                resp.append(arr[i]);
                resp.append("-");
                resp.append(arr[nextNumber]);
                if(nextNumber<arr.length-1){
                    resp.append(",");
                }
                rangeQuantity = 1;
                i = nextNumber;
            }else {
                resp.append(arr[i]);
                if (i<arr.length-1){
                    resp.append(",");
                }
                rangeQuantity = 1;
            }
        }
        return resp.toString();
    }
}
