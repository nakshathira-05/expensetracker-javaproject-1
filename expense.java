class Expense {
    int id;
    String username;   // 👈 linked to user
    double amount;
    String category;
    String description;
    String date;

    Expense(int id, String username, double amount,
            String category, String description, String date) {

        this.id = id;
        this.username = username;
        this.amount = amount;
        this.category = category;
        this.description = description;
        this.date = date;
    }
}
