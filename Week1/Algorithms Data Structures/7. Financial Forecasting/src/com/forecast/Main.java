package com.forecast;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get input from user
        System.out.print("Enter principal amount: ");
        double principal = scanner.nextDouble();

        System.out.print("Enter annual growth rate (e.g., 0.05 for 5%): ");
        double growthRate = scanner.nextDouble();

        System.out.print("Enter number of years: ");
        int numYears = scanner.nextInt();

        scanner.close();

        // Calculate future value
        double futureAmount = FinancialForecasting.computeProjection(principal, growthRate, numYears);

        // Print result
        System.out.printf("After %d years, the projected amount is: ₹%.2f\n", numYears, futureAmount);
    }
}
