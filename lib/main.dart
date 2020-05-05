import 'package:flutter/material.dart';
import 'package:to_do_app/Home.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My To~Do App',
      home: Home()
    );
  }
}

